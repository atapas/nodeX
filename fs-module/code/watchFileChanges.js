
const fs = require('fs');

function watchAFile(file) {
    fs.watch(file, (event, filename) => {
      if (filename) {
        console.log(`${filename} file Changed`);
      }
    });
}

watchAFile('friends.txt');