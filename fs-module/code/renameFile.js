const { rename } = require('fs/promises');

async function renameFile(from, to) {
  try {
    await rename(from, to);
    console.log(`Renamed ${from} to ${to}`);
  } catch (error) {
    console.error(`Got an error trying to rename the file: ${error.message}`);
  }
} 

const oldName = "rename-me.txt";
const newName = "renamed.txt";

renameFile(oldName, newName);

// renameFile('new-directory', 'new-directory-renamed');