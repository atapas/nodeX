/**
 * Node.JS Console Module
 * 
 * Save logs to output.log file, but send error logs to console.
 */

const { Console } = require('console');
const { createWriteStream } = require('fs');

const output = createWriteStream('./output.log');

const logger = new Console({
  stdout: output,
  stderr: process.stdout
})


let count = 0;
const startLogging = new Promise((resolve, reject) => {
  // log a message for every half second
  const log = setInterval(() => {
    logger.log('Count at %s is %d', new Date(), ++count)
  }, 500);

  // log an error for every 2 seconds
  const err = setInterval(() => {
    logger.error('Logged error at %s', new Date())
  }, 2000);

  // stop logging after 10 seconds
  const timeout = setTimeout(() => {
    clearInterval(log);
    clearInterval(err);

    resolve(timeout);
  }, 10000)
});

startLogging.then(timeout => {
  clearTimeout(timeout)
})
