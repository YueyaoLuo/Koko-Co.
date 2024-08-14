const Jewellery = require('../../models/jewellery')
const Category = require('../../models/category')
module.exports = {
    index,
    getJewelleryByCategory,
    getJewelleryById,
}

//get all jewellery
async function index(req, res) {
    try {
        const jewellery = await Jewellery.find({}).sort('name').exec()
        res.json(jewellery)
    }
    catch (err) {
        res.status(400).json(err);
    }
}

//get all jewellery of request category
async function getJewelleryByCategory(req, res) {
    try {
        const { categoryName } = req.params;
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


//get one specific jewellery of specific itemId
async function getJewelleryById(req, res) {
    try {
        // console.log("req.params is", req.params)
        const { jewelleryId } = req.params

        const jewellery = await Jewellery.findById(jewelleryId);
        // console.log("jewellery is:", jewellery); 

        res.json(jewellery);
    }
    catch (err) {
        res.status(400).json(err);
    }
}