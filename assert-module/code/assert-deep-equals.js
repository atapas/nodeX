/**
 * deepEquals assertion makes a deep validation over properties and values
 * there's also available notDeepEqual to make a falsy validation
 */
const { deepEqual } = require('assert');


const shouldNotRaiseAnErrorSinceUserBisEqualsUserA = () => {
  const userA = { name: 'yuri', email: 'yuri@some-email.com' };
  const userB = Object.assign({}, userA);
  deepEqual(userA, userB);
};

const shouldRaiseAnErrorSinceUserBDiffersInName = () => {
  const userA = { name: 'yuri', email: 'yuri@some-email.com' };
  const userB = Object.assign({}, userA, { name: userA.name.toUpperCase() });
  const message = 'should Raise An Error Since UserB Differs In Name';
  deepEqual(userA, userB, message);
};

const shouldRaiseAnErrorSinceUserBDiffersInProperties = () => {
  const userA = { name: 'yuri', email: 'yuri@some-email.com' };
  const userB = { name: 'yuri' };
  const message = 'should Raise An Error Since UserB Differs In Properties';
  deepEqual(userA, userB, message);
};

const shouldRaiseAnErrorSinceUserBDiffersInInnerObjects = () => {
  const userA = { name: 'yuri', email: 'yuri@some-email.com', address: { city: { name: 'some name' } } };
  const userB = Object.assign({}, userA, { address: { city: {} } });
  const message = 'should Raise An Error Since UserB Differs In Inner Objects';
  deepEqual(userA, userB, message);
};


/**
 * execution goes here. the first example will not raise an error,
 * the other ones are handled since the first error will halt the 
 * application execution
 */
shouldNotRaiseAnErrorSinceUserBisEqualsUserA();

try {
  shouldRaiseAnErrorSinceUserBDiffersInName();
} catch ({ message }) {
  console.log(message);
}

try {
  shouldRaiseAnErrorSinceUserBDiffersInProperties();
} catch ({ message }) {
  console.log(message);
}

try {
  shouldRaiseAnErrorSinceUserBDiffersInInnerObjects();
} catch ({ message }) {
  console.log(message);
}
