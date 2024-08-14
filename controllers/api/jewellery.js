const Jewellery = require('../../models/jewellery')
const Category = require('../../models/category')
module.exports = {
    index,
    getJewelleryByCategory
}

async function index(req, res) {
    try {
        const jewellery = await Jewellery.find({}).sort('name').exec()
        res.json(jewellery)
    }
    catch (err) {
        res.status(400).json(err);
    }
}

async function getJewelleryByCategory(req, res) {
    try {
        const {categoryName} = req.params; 
        const category = await Category.findOne({ name: categoryName });
        
        if (!category) {
            return res.status(404).json({ error: "Category not found" });
        }

        const jewellery = await Jewellery.find({ category: category._id });
        // console.log(jewellery); 

        res.json(jewellery);
    }
    catch (err) {
        res.status(400).json(err);
    }
}
