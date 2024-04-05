const hourglassSum =require('./array2d')

    describe('hourglassSum', () => {
        test('should calculate the maximum hourglass sum', () => {
            const input = [
                [1, 1, 1, 0, 0, 0],
                [0, 1, 0, 0, 0, 0],
                [1, 1, 1, 0, 0, 0],
                [0, 0, 2, 4, 4, 0],
                [0, 0, 0, 2, 0, 0],
                [0, 0, 1, 2, 4, 0]
            ];
            const expected = 19;
            expect(hourglassSum(input)).toBe(expected);
        });

        test('should throw error for invalid input', () => {
            const invalidInput = [
                [1, 1, 1, 0, 0],
                [0, 1, 0, 0, 0],
                [1, 1, 1, 0, 0],
                [0, 0, 2, 4, 4],
                [0, 0, 0, 2, 0],
                [0, 0, 1, 2, 4]
            ];
            expect(() => hourglassSum(invalidInput)).toThrowError("Invalid input: Array should be a 6x6 matrix.");
        });
    });
