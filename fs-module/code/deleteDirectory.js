const { rmdir } = require('fs/promises');

async function deleteDirectory(path) {
  try {
    await rmdir(path);
    console.log(`Deleted directory ${path}`);
  } catch (error) {
    console.error(`Got an error trying to delete the directory: ${error.message}`);
  }
}

deleteDirectory('new-directory-renamed');