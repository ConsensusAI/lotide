const eqObjects = require('../eqObjects');
const assert = require('chai').assert;

describe('#eqObjects', () => {
  it('should return true for the same object', () => {
    const obj1 = {a: "1", b: "2"};
    const obj2 = {a: "1", b: "2"};
    assert.equal(eqObjects(obj1, obj2), true);
  });

  it('should return false for different objects', () => {
    const obj1 = {a: "1", b: "2"};
    const obj2 = {a: "1", b: "3"};
    assert.equal(eqObjects(obj1, obj2), false);
  });

  it('should return true for the same object with differently ordered keys', () => {
    const obj1 = {a: "1", b: "2"};
    const obj2 = {b: "2", a: "1"};
    assert.equal(eqObjects(obj1, obj2), true);
  });

  it('should return false for an object with more keys', () => {
    const obj1 = {a: "1", b: "2"};
    const obj2 = {a: "1", b: "2", c: "3"};
    assert.equal(eqObjects(obj1, obj2), false);
  });
});