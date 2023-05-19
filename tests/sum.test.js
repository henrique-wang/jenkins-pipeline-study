const operators = require('../src/utils/operators');

test('it should return 3 when operands are 1 and 2', () => {
    expect(operators.sum(1, 2)).toEqual(3);
});

test('it should throw an error when an operand is not a number', () => {
    expect(() => operators.sum(1, 'a')).toThrow(TypeError);
});