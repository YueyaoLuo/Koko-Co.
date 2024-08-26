const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const jewellerySchema = require('./jewellerySchema');

const itemSchema = new Schema({
    qty: { type: Number, default: 1 },
    jewellery: jewellerySchema
  }, {
    timestamps: true,
    toJSON: { virtuals: true }
})

itemSchema.virtual('extPrice').get(function() {
    // 'this' keyword is bound to the lineItem document
    return this.qty * this.jewellery.price;
  });

  const deliveryAddressSchema = new Schema({
    firstName: { type: String, required: true },
    lastName: { type: String, required: true },
    phone: { type: Number, required: true },
    street: { type: String, required: true },
    suburb: { type: String, required: true },
    state: { type: String, required: true },
    postcode: { type: Number, required: true },
}, {
    _id: false // Prevents Mongoose from creating a separate _id for this subdocument
  });

const orderSchema = new Schema({
    user: {
        type: Schema.Types.ObjectId,
        ref: 'User',
        required: true
    },
    items: [itemSchema],
    isPaid: { type: Boolean, default: false },
    deliveryAddress: deliveryAddressSchema,  
}, {
    timestamps: true,
    toJSON: { virtuals: true }
});


orderSchema.virtual('orderTotal').get(function() {
    return this.items.reduce((total, item) => total + item.extPrice, 0);
  });
  
  orderSchema.virtual('orderQty').get(function() {
    return this.items.reduce((total, item) => total + item.qty, 0);
  });

orderSchema.virtual('orderId').get(function () {
    return this.id.slice(-6).toUpperCase();
});




orderSchema.statics.getCart = function (userId) {
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
orderSchema.methods.addProductToCart = async function (jewelleryId) {
    // 'this' keyword is bound to the cart (order doc)
    const cart = this;
    // Check if the item already exists in the cart
    const item = cart.items.find(item => item.jewellery._id.equals(jewelleryId));
    if (item) {
        // It already exists, so increase the qty
        item.qty += 1;
    } else {
        // Get the product from the "catalog"
        // Note how the mongoose.model method behaves as a getter when passed one arg vs. two
        const Jewellery = mongoose.model('Jewellery');
        const jewellery = await Jewellery.findById(jewelleryId);
        // The qty of the new product object being pushed in defaults to 1
        cart.items.push({ jewellery });
    }
    // return the save() method's promise
    return cart.save();
};

// Instance method to set an product's qty in the cart
orderSchema.methods.setProductQty = function (jewelleryId, newQty) {
    // this keyword is bound to the cart (order doc)
    const cart = this;
    // Find the item in the cart for the menu item
    const item = cart.items.find(item => item.jewellery._id.equals(jewelleryId));
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

// Instance method for removing an item to a cart (unpaid order)
orderSchema.methods.removeProductFromCart = async function (jewelleryId) {
    // 'this' keyword is bound to the cart (order doc)
    const cart = this;
    // Check if the item already exists in the cart
    const itemIndex = cart.items.findIndex(item => item.jewellery._id.equals(jewelleryId));
    if (itemIndex !== -1) {
        // It already exists, so increase the qty
        cart.items.splice(itemIndex, 1);
    } else {
        return console.log({ success: false, message: 'Item not found' });
    }
    // return the save() method's promise
    return cart.save();
};


module.exports = mongoose.model('Order', orderSchema);
