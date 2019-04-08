const functions = require('./functions');

test('Add 6 to 4 should return 10', () => {
   expect(functions.add(6,4)).toBe(10);
});
test('Empty argument should return error', () => {
   expect(functions.add()).toBe('Arguments must not be empty');
});