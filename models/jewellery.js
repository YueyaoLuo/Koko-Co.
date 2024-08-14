const mongoose = require('mongoose');

require('./category');
const jewellerySchema = require('./jewellerySchema');

module.exports = mongoose.model('Jewellery', jewellerySchema);