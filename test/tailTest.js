const assertEqual = require('../assertEqual');
const tail = require('../tail');

const emptyArray = [];
const singleValueArray = [1];

assertEqual(tail(emptyArray)[0], undefined);
assertEqual(tail(singleValueArray)[0], undefined);