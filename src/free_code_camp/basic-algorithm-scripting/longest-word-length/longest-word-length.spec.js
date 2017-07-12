import {
    findLongestWordLength,
    findLongestWordLength2
} from './longest-word-length';
import testParams from './test.params';

describe('findLongestWordLength function tests, declarative style ', () => {

    it('should be defined ', () => {
       expect(findLongestWordLength).toBeDefined()
    });

    it('should return expected length of the word using the params equal to each result', () => {
        testParams.forEach(({param, result}) => {
            expect(findLongestWordLength(param)).toEqual(result)
        });
    });

});

describe('findLongestWordLength2 function tests, imperative style ', () => {

    it('should be defined ', () => {
        expect(findLongestWordLength2).toBeDefined()
    });

    it('should return expected length of the word using the params equal to each result', () => {
        testParams.forEach(({param, result}) => {
            expect(findLongestWordLength2(param)).toEqual(result)
        });
    });

});
