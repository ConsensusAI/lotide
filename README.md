# Lotide

A mini clone of the [Lodash](https://lodash.com) library.

## Purpose

**_BEWARE:_ This library was published for learning purposes. It is _not_ intended for use in production-grade software.**

This project was created and published by me as part of my learnings at Lighthouse Labs. 

## Usage

**Install it:**

`npm install @consensusai/lotide`

**Require it:**

`const _ = require('@consensusai/lotide');`

**Call it:**

`const results = _.tail([1, 2, 3]) // => [2, 3]`

## Documentation

The following functions are currently implemented:

* `assertEqual(actual, expected)`: Compares two values with === and logs result of comparison.
* `eqArrays(array1, array2)`: Compares two arrays to assess equality.
* `assertArraysEqual(actualArray, expectedArray)`: Logs result of eqArrays.
* `eqObjects(object1, object2)`: Compares two objects to assess equality.
* `assertObjectsEqual(originalArray, comparedArray)`: Logs result of eqObjects.
* `countLetters(string)`: Counts how many times a letter appears in a string.
* `countOnly(allItems, itemsToCount)`: Returns an object containing values in an array, matching a passed array of items to count, as keys with the amount of times they appear as the key value.
* `findKey(object, callback)`: Returns the key of a passed object when the value of the key passed into a callback function evaluates to true.
* `findKeyByValue(object, value)`: Returns the key of a passed object that matches a passed value.
* `flatten(array)`: Returns an array that joins nested array values with the outermost array. 
* `head(array)`: Returns the value at index 0 of an array passed as an argument.
* `letterPositions(string)`: Returns an object with letters of a string passed as an argument as keys with the indices they appear at as values.
* `map(array, callback)`: Returns an array containing the return values from a callback acting on each value of a passed array.
* `middle(array)`: Returns the middle value(s) of a passed array. Returns undefined if the passed array has a length of 2 or less.
* `tail(array)`: Returns an array containing all the indices after 0 of a passed array.
* `takeUntil(array, callback)`: Returns all the values of a passed array until a passed callback evaluates to true.
* `without(source, itemsToRemove)`: Returns an array with items to remove filtered out.