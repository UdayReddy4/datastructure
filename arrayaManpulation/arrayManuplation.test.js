const arrayManipulation = require('./arrayManuplation'); // Import the function to be tested

describe('arrayManipulation function', () => {
    // Test cases for valid inputs
    test('should return the maximum value correctly for valid inputs', () => {
        const result = arrayManipulation(5, [[1, 3, 2], [2, 5, 5], [3, 4, 3]]);
        expect(result).toBe(10); // Expected output is 10
    });

    // Test cases for invalid inputs
    test('should throw an error if n is not a positive integer', () => {
        expect(() => arrayManipulation('5', [[1, 3, 2], [2, 5, 5], [3, 4, 3]])).toThrow("'n' must be a positive integer.");
    });

    test('should throw an error if queries is not a non-empty array', () => {
        expect(() => arrayManipulation(5, 123)).toThrow("'queries' must be a non-empty array.");
    });

   

    test('should handle single query correctly', () => {
        const result = arrayManipulation(5, [[1, 5, 10]]);
        expect(result).toBe(10); // Expected output is 10
    });

    test('should handle single element array correctly', () => {
        const result = arrayManipulation(1, [[1, 1, 5]]);
        expect(result).toBe(5); // Expected output is 5
    });

});
