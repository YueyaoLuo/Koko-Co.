const Product = require('../../models/jewellery')

module.exports = {
    index,
}

async function index(req, res) {
    try {
        const jewellery = await Product.find({}).sort('name').exec()
        res.json(jewellery)
    }
    catch (err) {
        res.status(400).json(err);
    }
}