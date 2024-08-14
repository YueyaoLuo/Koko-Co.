require('dotenv').config({ path: '.env.local' });
require('./config/database');

const Category = require('./models/category');
const Jewellery = require('./models/jewellery');

(async function () {
    await Category.deleteMany({});
    const categories = await Category.create([
        { name: 'bracelets', sortOrder: 10 },
        { name: 'earrings', sortOrder: 20 },
        { name: 'necklaces', sortOrder: 30 },
        { name: 'rings', sortOrder: 40 },
    ]);

    await Jewellery.deleteMany({});
    const produs = await Jewellery.create([
        //bracelets
        { name: 'Love Links', category: categories[0], price: 32, imageUrls: ['https://kokoandco.s3.ap-southeast-2.amazonaws.com/bracelets/Love+links+1.jpg', 'https://kokoandco.s3.ap-southeast-2.amazonaws.com/bracelets/Love+links+2.png'] },
        { name: 'Lucy Knot', category: categories[0], price: 32, imageUrls: ['https://kokoandco.s3.ap-southeast-2.amazonaws.com/bracelets/lucky+knot+1.jpg', 'https://kokoandco.s3.ap-southeast-2.amazonaws.com/bracelets/lucky+knot+2.jpg'] },
        { name: 'The Cuben Link', category: categories[0], price: 48, imageUrls: ['https://kokoandco.s3.ap-southeast-2.amazonaws.com/bracelets/The+cuben+link+1.jpg', 'https://kokoandco.s3.ap-southeast-2.amazonaws.com/bracelets/The+cuben+link+2.png'] },
        //earrings
        { name: 'Circle of life', category: categories[1], price: 28, imageUrls: ['https://kokoandco.s3.ap-southeast-2.amazonaws.com/earrings/Circle+of+life+1.jpg', 'https://kokoandco.s3.ap-southeast-2.amazonaws.com/earrings/Circle+of+life+2.png'] },
        { name: 'Complexity', category: categories[1], price: 28, imageUrls: ['https://kokoandco.s3.ap-southeast-2.amazonaws.com/earrings/Complexity+1.png', 'https://kokoandco.s3.ap-southeast-2.amazonaws.com/earrings/Complexity+2.png'] },
        { name: 'Curly C', category: categories[1], price: 28, imageUrls: ['https://kokoandco.s3.ap-southeast-2.amazonaws.com/earrings/Curly+C+1.jpg', 'https://kokoandco.s3.ap-southeast-2.amazonaws.com/earrings/Curly+C+2.png'] },
        { name: 'Double C', category: categories[1], price: 20, imageUrls: ['https://kokoandco.s3.ap-southeast-2.amazonaws.com/earrings/Double+C.png'] },
        { name: 'Double Ring', category: categories[1], price: 28, imageUrls: ['https://kokoandco.s3.ap-southeast-2.amazonaws.com/earrings/Double+ring+1.jpg', 'https://kokoandco.s3.ap-southeast-2.amazonaws.com/earrings/Double+ring+2.png'] },
        { name: 'Infinity', category: categories[1], price: 28, imageUrls: ['https://kokoandco.s3.ap-southeast-2.amazonaws.com/earrings/Infinity.jpg'] },
        { name: 'Knot of Love', category: categories[1], price: 28, imageUrls: ['https://kokoandco.s3.ap-southeast-2.amazonaws.com/earrings/knot+of+love.jpg'] },
        { name: 'Lock', category: categories[1], price: 20, imageUrls: ['https://kokoandco.s3.ap-southeast-2.amazonaws.com/earrings/Lock+1.png', 'https://kokoandco.s3.ap-southeast-2.amazonaws.com/earrings/Lock+2.png'] },
        { name: 'Love U', category: categories[1], price: 20, imageUrls: ['https://kokoandco.s3.ap-southeast-2.amazonaws.com/earrings/Love+U+1.jpg', 'https://kokoandco.s3.ap-southeast-2.amazonaws.com/earrings/Love+U+2.png'] },
        { name: 'Pearl Love', category: categories[1], price: 35, imageUrls: ['https://kokoandco.s3.ap-southeast-2.amazonaws.com/earrings/Pearl+love+1.jpg', 'https://kokoandco.s3.ap-southeast-2.amazonaws.com/earrings/Pearl+love+2.png'] },
        { name: 'Pure Love', category: categories[1], price: 20, imageUrls: ['https://kokoandco.s3.ap-southeast-2.amazonaws.com/earrings/pure+love+1.jpg', 'https://kokoandco.s3.ap-southeast-2.amazonaws.com/earrings/pure+love+2.png', 'https://kokoandco.s3.ap-southeast-2.amazonaws.com/earrings/pure+love+3.jpg'] },
        { name: 'Sparkling', category: categories[1], price: 30, imageUrls: ['https://kokoandco.s3.ap-southeast-2.amazonaws.com/earrings/Sparkling+1.jpg', 'https://kokoandco.s3.ap-southeast-2.amazonaws.com/earrings/Sparkling+2.png'] },
        { name: 'Wavy C', category: categories[1], price: 35, imageUrls: ['https://kokoandco.s3.ap-southeast-2.amazonaws.com/earrings/Wavy+C+1.jpg', 'https://kokoandco.s3.ap-southeast-2.amazonaws.com/earrings/Wavy+C+2.jpg'] },
        //necklaces
        { name: 'Butterfly Vintage', category: categories[2], price: 25, imageUrls: ['https://kokoandco.s3.ap-southeast-2.amazonaws.com/necklace/Butterfly+vintage+1.jpg', 'https://kokoandco.s3.ap-southeast-2.amazonaws.com/necklace/Butterfly+vintage+2.jpg'] },
        { name: 'Heart of Pearl', category: categories[2], price: 56, imageUrls: ['https://kokoandco.s3.ap-southeast-2.amazonaws.com/necklace/Heart+of+Pearl+1.jpg', 'https://kokoandco.s3.ap-southeast-2.amazonaws.com/necklace/Heart+of+Pearl+2.jpg'] },
        { name: 'Pearlbean', category: categories[2], price: 56, imageUrls: ['https://kokoandco.s3.ap-southeast-2.amazonaws.com/necklace/Pearlbean+1.jpg', 'https://kokoandco.s3.ap-southeast-2.amazonaws.com/necklace/Pearlbean+2.jpg'] },
        { name: 'Rose Avenue', category: categories[2], price: 48, imageUrls: ['https://kokoandco.s3.ap-southeast-2.amazonaws.com/necklace/Rose+avenue.jpg', 'https://kokoandco.s3.ap-southeast-2.amazonaws.com/necklace/Rose+avenue+1.jpg'] },
        { name: 'Simplicity', category: categories[2], price: 48, imageUrls: ['https://kokoandco.s3.ap-southeast-2.amazonaws.com/necklace/Simplicity.jpg'] },
        { name: 'Summer Tulip', category: categories[2], price: 28, imageUrls: ['https://kokoandco.s3.ap-southeast-2.amazonaws.com/necklace/Summer+Tulip.jpg'] },
        //rings
        { name: 'Hear Beat', category: categories[3], price: 42, imageUrls: ['https://kokoandco.s3.ap-southeast-2.amazonaws.com/rings/heart+beating+1.jpg', 'https://kokoandco.s3.ap-southeast-2.amazonaws.com/rings/heart+beating+2.jpg'] },
        { name: 'Hug', category: categories[3], price: 42, imageUrls: ['https://kokoandco.s3.ap-southeast-2.amazonaws.com/rings/Hug.jpg'] },
        { name: 'Meet U', category: categories[3], price: 42, imageUrls: ['https://kokoandco.s3.ap-southeast-2.amazonaws.com/rings/meet+u+1.jpg', 'https://kokoandco.s3.ap-southeast-2.amazonaws.com/rings/meet+u+2.png'] },
        { name: 'Miss U', category: categories[3], price: 42, imageUrls: ['https://kokoandco.s3.ap-southeast-2.amazonaws.com/rings/miss+u+1.jpg', 'https://kokoandco.s3.ap-southeast-2.amazonaws.com/rings/miss+u+2.jpg'] },
        { name: 'Sunflower', category: categories[3], price: 42, imageUrls: ['https://kokoandco.s3.ap-southeast-2.amazonaws.com/rings/sunflower+1.jpg', 'https://kokoandco.s3.ap-southeast-2.amazonaws.com/rings/sunflower+2.jpg'] },
        { name: 'Timeless', category: categories[3], price: 42, imageUrls: ['https://kokoandco.s3.ap-southeast-2.amazonaws.com/rings/Timeless+1.jpg', 'https://kokoandco.s3.ap-southeast-2.amazonaws.com/rings/Timeless+2.jpg'] },
    ]);

    console.log(produs)

    process.exit();

})();
