
const { copyFile } = require('fs/promises');

const { join } = require('path');

async function copyAFile(from, to) {
  try {
    await copyFile(from, to);
    console.log(`Copied ${from} to ${to}`);
  } catch (err) {
    console.error(`Got an error trying to copy the file: ${err.message}`);
  }
}

async function copyAll(fromDir, toDir, filePaths) {
  return Promise.all(filePaths.map(filePath => {
    return copyAFile(join(fromDir, filePath), join(toDir, filePath));
  }));
}

async function copyFiles(fromDir, toDir, filePaths) {
  try {
    await copyAll(fromDir, toDir, filePaths);
    console.log('Copied all files');
  } catch(err) {
    console.error(`Got an error trying to copy the files: ${err.message}`);
  }
  
}

// copyFile('friends.txt', 'friends-copy.txt');

copyFiles('from', 'to', ['copyA.txt', 'copyB.txt']);


