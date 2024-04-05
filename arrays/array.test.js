const reverseArray = require('./array')
describe('reverseArray function', () => {
    test('should return an array with elements reversed', () => {
        expect(reverseArray([1, 2, 3])).toEqual([3, 2, 1]);

        expect(reverseArray(['a', 'b', 'c'])).toEqual(['c', 'b', 'a']);
        expect(reverseArray([true, false])).toEqual([false, true]);
    });

    test('should throw error for invalid input', () => {
        expect(() => reverseArray('not an array')).toThrow('Input must be an array');

        expect(() => reverseArray(123)).toThrow('Input must be an array');
    });
});
