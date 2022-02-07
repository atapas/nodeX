
const { symlink } = require('fs/promises');
const { join } = require('path');

async function createSymlink(target, path, type) {
  try {
    await symlink(target, path, type);
    console.log(`Created symlink to ${target} at ${path}`);
  } catch (error) {
    console.error(`Got an error trying to create the symlink: ${error.message}`);
  }
}

createSymlink('join(__dirname, from, symMe.txt)', 'symLinkToFile', 'file');
