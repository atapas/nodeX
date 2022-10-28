/**
 * Node.JS Errors Module
 * 
 * RangeError indicates that a provided argument was not within the range of acceptable values.
 */

//  Infinite recursion - It will result in the RangeError

function foo() {
  foo();
}

foo();
 