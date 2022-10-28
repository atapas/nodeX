/**
 * Node.JS Errors Module
 * 
 * All errors thrown by the node:assert module will be instances of the AssertionError class.
 */

const assert = require('assert');
      
var invalidNumber = function(){
  throw console.log("Invalid Number");
};
  
var numberValidation = function(a){
  if(a>10){
      invalidNumber();
  }
  else{
      console.log("Valid number");
  }
};
  
assert.throws(function(){
    numberValidation(5);
});
