const functions = require('./functions');

test('Add 6 to 4 should return 10', () => {
   expect(functions.add(6,4)).toBe(10);
});
test('Empty argument should return error', () => {
   expect(functions.add()).toBe('Arguments must not be empty');
});
test('Should return error if either is string', () => {
    expect(functions.add("Hello", "2")).toBe("Both arguments must be an Integer");
});
test('Add 6, 4, 5 and 10 should return 25', () => {
    expect(functions.indefiniteAdd(6,4,5,10)).toBe(25);
});
test('Empty argument should return error', () => {
    expect(functions.indefiniteAdd()).toBe('Arguments must not be empty');
});
test('Difference of 5 and 2 should be 3', () => {
    expect(functions.difference(5,2)).toBe(3);
});
test('If either arguments are empty', () => {
    expect(functions.difference()).toBe('Arguments must not be empty');
});
test('If either arguments are string', () => {
    expect(functions.difference("Hello", "World")).toBe("Both arguments must be an Integer");
});
test('Multiply 6, 4, 5 and 10 should return 1200', () => {
    expect(functions.multiply(6,4,5,10)).toBe(1200);
});