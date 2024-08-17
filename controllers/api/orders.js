const Order = require('../../models/order')
const stripe = require('stripe')(process.env.STRIPE_SECRET_KEY)
module.exports = {
    cart,
    addToCart,
    setProductQtyInCart,
    payment,
    revemoCartItem,
};

// A cart is the unpaid order for a user
async function cart(req, res) {
    // console.log(req.user)
    const cart = await Order.getCart(req.user._id);
    res.json(cart);
}

// Add an item to the cart
async function addToCart(req, res) {
    const cart = await Order.getCart(req.user._id);
    await cart.addProductToCart(req.params.id);
    res.json(cart);
}

// Updates an item's qty in the cart
async function setProductQtyInCart(req, res) {
    const cart = await Order.getCart(req.user._id);
    await cart.setProductQty(req.body.itemId, req.body.newQty);
    res.json(cart);
}

// Update the cart's isPaid property to true
async function payment(req, res) {
    // console.log("req.body is", req.body)
    let {amount, id} = req.body
    // console.log("id is:", {id})
    try {
        const payment = await stripe.paymentIntents.create({
            amount: amount * 100,
            currency: "aud",
            description: "Koko&co",
            payment_method: id,
            confirm: true,
            return_url: "https://kokoandco.onrender.com/orders/shoppingbag/checkout"
        })
        console.log("Payment", payment)
        res.json({
            message: "Payment successful",
            success: true
        })
    } catch (error) {
        console.log("Error", error)
        res.json({
            message: "Payment failed",
            success: false
        })
    }
}


async function revemoCartItem(req, res) {
    const cart = await Order.getCart(req.user._id);
    await cart.removeProductFromCart(req.params.id);
    res.json(cart);
}