const { mkdtemp } = require('fs/promises');
const { join } = require('path');
const { tmpdir } = require('os');

async function createTemporaryDirectory(fileName) {
  try {
    const tempDirectory = await mkdtemp(join(tmpdir(), fileName));
    console.log(`Created temporary directory ${tempDirectory}`);
  } catch (error) {
    console.error(`Got an error trying to create the temporary directory: ${error.message}`);
  }
}

createTemporaryDirectory('node-temp-tapas-');

