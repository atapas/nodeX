/**
 * Node.JS Errors Module
 * 
 * TypeError happens when an operation could not be performed, due to value is not expected type.
 */

let number = 11;

try {
  number.toUpperCase();
} catch (err) {
  console.log(err);
};
 