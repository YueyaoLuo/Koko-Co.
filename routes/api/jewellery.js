const express = require('express');
const router = express.Router();
const productsCtrl = require('../../controllers/api/jewellery');


router.get('/', productsCtrl.index);
module.exports = router;