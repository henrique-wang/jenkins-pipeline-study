const operators = require('../src/utils/operators');

test('it should return 3 when operands are 1 and 2', () => {
    expect(operators.sum(1, 2)).toEqual(3);
});
