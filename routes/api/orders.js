const express = require('express');
const router = express.Router();
const ordersCtrl = require('../../controllers/api/orders');
const ensureLoggedIn = require('../../config/ensureLoggedIn');

router.get('/shoppingbag', ensureLoggedIn, ordersCtrl.cart);
router.post('/shoppingbag/items/:id', ensureLoggedIn, ordersCtrl.addToCart);
// POST /api/orders/shoppingbag/payment
router.post('/shoppingbag/payment', ensureLoggedIn, ordersCtrl.payment);

router.post('/shoppingbag/checkout', ensureLoggedIn, ordersCtrl.create);
// POST /api/orders/shoppingbag/qty
router.put('/shoppingbag/qty', ensureLoggedIn, ordersCtrl.setProductQtyInCart);
router.delete('/shoppingbag/items/remove/:id', ensureLoggedIn, ordersCtrl.revemoCartItem)
module.exports = router;
