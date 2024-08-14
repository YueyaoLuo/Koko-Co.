const express = require('express');
const router = express.Router();
const jewelleryCtrl = require('../../controllers/api/jewellery');

router.get('/jewellery/:categoryName', (req, res) => {
    console.log('req.params:', req.params);
    res.send(`Category Name: ${req.params.categoryName}`);
});

router.get('/:categoryName/:jewelleryId', jewelleryCtrl.getJewelleryById)
router.get('/:categoryName', jewelleryCtrl.getJewelleryByCategory)
router.get('/', jewelleryCtrl.index);
module.exports = router;