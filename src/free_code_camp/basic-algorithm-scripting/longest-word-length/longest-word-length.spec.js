import { findLongestWordsLength } from './longest-word-length';
import testParams from './test.params';

describe('Longest word length function tests ', () => {

    it('should be defined ', () => {
       expect(findLongestWordsLength).toBeDefined()
    });

    it('should return expected length of the word using the params equal to each result', () => {
        testParams.forEach(({param, result}) => {
            expect(findLongestWordsLength(param)).toEqual(result)
        });
    });

});