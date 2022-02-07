const { appendFile } = require('fs/promises');

// Create file using the appendFile method
async function updateFile(fileName, data) {
  try {
    await appendFile(fileName, data, { flag: 'a' });
    console.log(`Appended data to ${fileName}`);
  } catch (error) {
    console.error(`Got an error trying to append the file: ${error.message}`);
  }
}

updateFile('friends.txt', 'Bobby');

// updateFile('permission.txt', 'Harry');