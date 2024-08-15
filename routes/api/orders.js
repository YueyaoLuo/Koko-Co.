const express = require('express');
const router = express.Router();
const ordersCtrl = require('../../controllers/api/orders');
const ensureLoggedIn = require('../../config/ensureLoggedIn');

router.get('/shoppingbag', ensureLoggedIn, ordersCtrl.cart);
router.post('/shoppingbag/items/:id', ensureLoggedIn, ordersCtrl.addToCart);
// POST /api/orders/shoppingbag/checkout
router.post('/shoppingbag/checkout', ensureLoggedIn, ordersCtrl.checkout);
// POST /api/orders/shoppingbag/qty
router.put('/shoppingbag/qty', ensureLoggedIn, ordersCtrl.setProductQtyInCart);

module.exports = router;
