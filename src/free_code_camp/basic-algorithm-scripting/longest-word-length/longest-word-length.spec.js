import {
    findLongestWordLength,
    findLongestWordLength2
} from './longest-word-length';
import testParams from './test.params';

describe('findLongestWordLength function tests, declarative style ', () => {

    it('should be defined ', () => {
       expect(findLongestWordLength).toBeDefined()
    });

    testParams.forEach(({ param, result }, index) => {
        it(`should return expected result using given params with testParams at index ${index}`, () => {
            expect(findLongestWordLength(param)).toEqual(result)
        })
    });

});

describe('findLongestWordLength2 function tests, imperative style ', () => {

    it('should be defined ', () => {
        expect(findLongestWordLength2).toBeDefined()
    });

    testParams.forEach(({ param, result }, index) => {
        it(`should return expected result using given params with testParams at index ${index}`, () => {
            expect(findLongestWordLength2(param)).toEqual(result)
        })
    });

});
