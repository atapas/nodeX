
const { readFileSync } = require('fs');

function readFileSynchronously(path) {
  try {
    const data = readFileSync(path);
    console.log(data.toString());
  } catch (error) {
    console.error(error);
  }
}

readFileSynchronously('activities.txt');
readFileSynchronously('friends.txt');
readFileSynchronously('tasks.txt');