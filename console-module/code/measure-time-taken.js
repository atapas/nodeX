/**
 * Node.JS Console Module
 * 
 * Log the time taken of a async or time taking process
 */

// Also works with global console
const { time, timeEnd } = require('console');
const delay = ms => new Promise(resolve => setTimeout(resolve, ms));

(async () => {
  time('measure-time-taken');

  // Some time-taking process
  await delay(3000);

  timeEnd('measure-time-taken');
})()
