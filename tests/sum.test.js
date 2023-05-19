const operators = require('../src/utils/operators');

// Force an error
test('it should return 3 when operands are 1 and 2', () => {
    expect(operators.sum(1, 2)).toEqual(4);
});