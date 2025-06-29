const fs = require('fs');
const path = require('path');

// List of folders to process
const folders = [
  'public/images/bracelets',
  'public/images/earrings',
  'public/images/necklace',
  'public/images/rings',
];

folders.forEach((folderPath) => {
  const fullPath = path.join(__dirname, folderPath);
  fs.readdir(fullPath, (err, files) => {
    if (err) {
      console.error(`❌ Failed to read folder ${folderPath}:`, err.message);
      return;
    }

    files.forEach((file) => {
      if (file.includes(' ')) {
        const newFileName = file.replace(/ /g, '+');
        const oldPath = path.join(fullPath, file);
        const newPath = path.join(fullPath, newFileName);

        fs.rename(oldPath, newPath, (err) => {
          if (err) {
            console.error(`❌ Error renaming ${file}:`, err.message);
          } else {
            console.log(`✅ Renamed: ${file} → ${newFileName}`);
          }
        });
      }
    });
  });
});
