const matchingStrings=require('./sparseArray')

describe('matchingStrings function', () => {
    test('should count occurrences correctly', () => {
        const stringList = ['aba', 'baba', 'aba', 'xzxb'];
        const queries = ['aba', 'xzxb', 'ab'];
        expect(matchingStrings(stringList, queries)).toEqual([2, 1, 0]);
    });
    
    test('if this empty it return error', () => {
        expect(matchingStrings([], [])).toBe("Error : The stringList or queries INPUT is Wrong");
    });

    test('if one array is empty it will return error', () => {
        const stringList = ['aba', 'baba', 'aba', 'xzxb'];
        expect(matchingStrings(stringList, [])).toBe("Error : The stringList or queries INPUT is Wrong");
    });


    test('should count occurrences for repeated queries', () => {
        const stringList = ['aba', 'baba', 'aba', 'xzxb'];
        const queries = ['aba', 'aba', 'aba'];
        expect(matchingStrings(stringList, queries)).toEqual([2, 2, 2]);
    });

    test('should return zeros for queries not found', () => {
        const stringList = ['aba', 'baba', 'aba', 'xzxb'];
        const queries = ['foo', 'bar'];
        expect(matchingStrings(stringList, queries)).toEqual([0, 0]);
    });
});
