/**
 * Node.JS Console Module
 * 
 * Log the time taken of a async or time taking process
 */
const { Console } = require('console');
const { createWriteStream } = require('fs');

const output = createWriteStream('./output.log');

const logger = new Console({ stdout: output })

// Logging into tabular format ----------------------

// Log object in tabular form
logger.table({
  name: 'ArunKumar',
  favNo: 7,
  loves: ['JavaScript', 'Java', 'Python']
})

// Log array of strings in tabular form
logger.table(['JavaScript', 'JS', 'ES6', 'TS'])

// logg array of ambiguous data 
logger.table([
  'JS', 100, true, {
    n1: 23, n2: [1, 2, 3]
  }
])

logger.log('')

// Grouping multiple logs ----------------------
logger.group('my-log-group');
logger.log('Hello')
logger.error('Error')
logger.info('Info')
logger.log({ a: 1, b: 2 })
logger.groupEnd('my-log-group');
logger.log("I'll log out of group");
