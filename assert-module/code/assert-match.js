/**
 * match assertion makes a regex validation over an string value
 * there's also available doesNotMatch to make a falsy validation
 */
const { match } = require('assert');


const shouldNotRaiseAnErrorSinceEmailHasAnExpectedPattern = () => {
  const email = 'yuri@email.com';
  const regex = /^((?!\.)[\w-_.]*[^.])(@\w+)(\.\w+(\.\w+)?[^.\W])$/i
  match(email, regex);
};

const shouldRaiseAnErrorSinceEmailHasAnMismatchInPattern = () => {
  const email = 'yuriatemail.com';
  const regex = /^((?!\.)[\w-_.]*[^.])(@\w+)(\.\w+(\.\w+)?[^.\W])$/i;
  const message = 'should Raise An Error Since Email Has An Mismatch In Pattern';
  match(email, regex, message);
};


/**
 * execution goes here. the first example will not raise an error,
 * the other one is handled since provided email has not an expected
 * pattern
 */
shouldNotRaiseAnErrorSinceEmailHasAnExpectedPattern();

try {
  shouldRaiseAnErrorSinceEmailHasAnMismatchInPattern();
} catch ({ message }) {
  console.log(message);
}
