const { unlink } = require('fs/promises');

async function deleteFile(filePath) {
  try {
    await unlink(filePath);
    console.log(`Deleted ${filePath}`);
  } catch (error) {
    console.error(`Got an error trying to delete the file: ${error.message}`);
  }
}

deleteFile('delete-me.txt');
