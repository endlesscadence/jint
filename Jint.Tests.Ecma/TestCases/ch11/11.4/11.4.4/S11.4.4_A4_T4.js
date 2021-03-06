// Copyright 2009 the Sputnik authors.  All rights reserved.
/**
 * Operator ++x returns ToNumber(x) + 1
 *
 * @path ch11/11.4/11.4.4/S11.4.4_A4_T4.js
 * @description Type(x) is undefined or null
 */

//CHECK#1
var x; 
if (isNaN(++x) !== true) {
  $ERROR('#1: var x; ++x === Not-a-Number. Actual: ' + (++x));
}

//CHECK#2
var x = null;
if (++x !== 1) {
  $ERROR('#2: var x = null; ++x === 1. Actual: ' + (++x));
}

