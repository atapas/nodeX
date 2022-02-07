
const { chmod } = require('fs/promises');

async function changePermission(filePath, permission) {
  try {
    await chmod(filePath, permission);
    console.log(`Changed permission to ${permission} for ${filePath}`);
  } catch (error) {
    console.error(`Got an error trying to change permission: ${error.message}`);
  }
}

changePermission('permission.txt', 0o400);