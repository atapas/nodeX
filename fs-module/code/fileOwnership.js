
const { chown } = require('fs/promises');

async function changeOwnership(filePath, userId, groupId) {
  try {
    await chown(filePath, userId, groupId);
    console.log(`Changed ownership to ${userId}:${groupId} for ${filePath}`);
  } catch (error) {
    console.error(`Got an error trying to change ownership: ${error.message}`);
  }
}

changeOwnership('ownership.txt', 1000, 1010);