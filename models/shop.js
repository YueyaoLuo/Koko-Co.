const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const productSchema = require('./productSchema');

const itemSchema = new Schema({
    qty: { type: Number, default: 1 },
    product: productSchema
  }, {
    timestamps: true,
    toJSON: { virtuals: true }
})


const shopSchema = new Schema({
    user: {
        type: Schema.Types.ObjectId,
        ref: 'User',
        required: true
    },
    items: [itemSchema],
    isPaid: { type: Boolean, default: false }
}, {
    timestamps: true,
    toJSON: { virtuals: true }
});
shopSchema.virtual('orderId').get(function () {
    return this.id.slice(-6).toUpperCase();
});

shopSchema.statics.getCart = function (userId) {
    return this.findOneAndUpdate(
        // query object
        { user: userId, isPaid: false },
        // update doc - provides values when inserting
        { user: userId },
        // upsert option
        { upsert: true, new: true }
    );
};

// Instance method for adding an item to a cart (unpaid order)
shopSchema.methods.addProductToCart = async function (productId) {
    // 'this' keyword is bound to the cart (order doc)
    const cart = this;
    // Check if the item already exists in the cart
    const item = cart.items.find(item => item.product._id.equals(productId));
    if (item) {
        // It already exists, so increase the qty
        item.qty += 1;
    } else {
        // Get the product from the "catalog"
        // Note how the mongoose.model method behaves as a getter when passed one arg vs. two
        const Product = mongoose.model('Product');
        const product = await Product.findById(productId);
        // The qty of the new product object being pushed in defaults to 1
        cart.items.push({ product });
    }
    // return the save() method's promise
    return cart.save();
};

// Instance method to set an product's qty in the cart
shopSchema.methods.setProductQty = function (productId, newQty) {
    // this keyword is bound to the cart (order doc)
    const cart = this;
    // Find the item in the cart for the menu item
    const item = cart.items.find(item => item.product._id.equals(productId));
    if (item && newQty <= 0) {
        // Calling deleteOne, removes the item subdoc from the cart.items array
        item.deleteOne();
    } else if (item) {
        // Set the new qty - positive value is assured thanks to prev if
        item.qty = newQty;
    }
    // return the save() method's promise
    return cart.save();
};

module.exports = mongoose.model('Shop', shopSchema);
