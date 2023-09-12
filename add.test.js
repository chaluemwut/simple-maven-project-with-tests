const _adder = require('./adder');

describe('test sum function', () => {
    test('adds 1 + 2 to equal 3', () => {
      expect(_adder.add(1, 2)).toBe(3);
    });
  });