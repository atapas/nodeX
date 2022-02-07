const { rename } = require('fs/promises');

const { join } = require('path');

async function moveFile(from, to) {
  try {
    await rename(from, to);
    console.log(`Moved ${from} to ${to}`);
  } catch (error) {
    console.error(`Got an error trying to move the file: ${error.message}`);
  }
} 

const fromPath = join(__dirname, "from", "move-me.txt");
const destPath = join(__dirname, "to", "move-me.txt");

moveFile(fromPath, destPath);

// moveFile(destPath, fromPath);


