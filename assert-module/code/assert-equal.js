/**
 * equal assertion makes a simple validation over primitive types
 * there's also available notEqual to make a falsy validation
 */
const { equal } = require('assert');


const shouldNotRaiseAnErrorSinceMessageBisEqualsMessageA = () => {
  const messageA = 'simple message';
  const messageB = 'simple message';
  equal(messageA, messageB);
};

const shouldRaiseAnErrorSinceBothHasNotPrimitiveTypes = () => {
  const userA = { name: 'yuri' };
  const userB = Object.assign({}, userA);
  const message = 'should Raise An Error Since Both Has Not Primitive Types';
  equal(userA, userB, message);
};

const shouldRaiseAnErrorSinceValueAisTrueAndValueBisFalse = () => {
  const valueA = true;
  const valueB = false;
  const message = 'should Raise An Error Since ValueA is True And ValueB is False';
  equal(valueA, valueB, message);
};

const shouldRaiseAnErrorSinceMessageBHasAnUppercaseLetter = () => {
  const messageA = 'simple message';
  const messageB = 'Simple message';
  const message = 'should Raise An Error Since messageB has an uppercase char';
  equal(messageA, messageB, message);
};


/**
 * execution goes here. the first example will not raise an error,
 * the other one is handled since the first error will halt the 
 * application execution
 */
shouldNotRaiseAnErrorSinceMessageBisEqualsMessageA();

try {
  shouldRaiseAnErrorSinceMessageBHasAnUppercaseLetter();
} catch ({ message }) {
  console.log(message);
}

try {
  shouldRaiseAnErrorSinceValueAisTrueAndValueBisFalse();
} catch ({ message }) {
  console.log(message);
}

try {
  shouldRaiseAnErrorSinceBothHasNotPrimitiveTypes();
} catch ({ message }) {
  console.log(message);
}
