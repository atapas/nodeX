/**
 * ok assertion makes a simple truthy validation
 */
const { ok } = require('assert');


const shouldNotRaiseAnErrorSinceValueIsTruthy = () => {
  const value = 'some value';
  ok(value);
};

const shouldRaiseAnErrorSinceValueIsFalsy = () => {
  const value = !true;
  const message = 'should Raise An Error Since Value Is Falsy';
  ok(value, message);
};

/**
 * execution goes here. the first example will not raise an error,
 * the other one is handled since provided value is falsy
 */
shouldNotRaiseAnErrorSinceValueIsTruthy();

try {
  shouldRaiseAnErrorSinceValueIsFalsy();
} catch ({ message }) {
  console.log(message);
}
