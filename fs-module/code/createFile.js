
const { writeFile, appendFile, open } = require('fs/promises');

async function writeToFile(fileName, data) {
  try {
    await writeFile(fileName, data);
    console.log(`Wrote data to ${fileName}`);
  } catch (error) {
    console.error(`Got an error trying to write the file: ${error.message}`);
  }
}

// Create file using the appendFile method
async function appendToFile(fileName, data) {
  try {
    await appendFile(fileName, data, { flag: 'w' });
    console.log(`Appended data to ${fileName}`);
  } catch (error) {
    console.error(`Got an error trying to append the file: ${error.message}`);
  }
}

// Create file using the open method
async function openFile(fileName, data) {
  try {
    const file = await open(fileName, 'w');
    await file.write(data);
    console.log(`Opened file ${fileName}`);
  } catch (error) {
    console.error(`Got an error trying to open the file: ${error.message}`);
  }
}



// Replaces the content of the file, if the file exists.
// If the file does not exist, it creates a new file.
writeToFile('friends.txt', 'Bob');

// Create a file using the appendFile method
appendToFile('activities.txt', 'Skiing');

// Create a file with the open method
openFile('tasks.txt', 'Do homework');



