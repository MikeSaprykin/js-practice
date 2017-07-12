import {
    findLongestWordLength,
    findLongestWordLength2
} from './longest-word-length';
import testParams from './test.params';

describe('findLongestWordLength function tests, declarative style ', () => {

    it('should be defined ', () => {
       expect(findLongestWordLength).toBeDefined()
    });

    testParams.forEach(({ param, result }) => {
        it(`should return ${JSON.stringify(result)} using ${JSON.stringify(param)}`, () => {
            expect(findLongestWordLength(param)).toEqual(result)
        })
    });

});

describe('findLongestWordLength2 function tests, imperative style ', () => {

    it('should be defined ', () => {
        expect(findLongestWordLength2).toBeDefined()
    });

    testParams.forEach(({ param, result }) => {
        it(`should return ${JSON.stringify(result)} using ${JSON.stringify(param)}` , () => {
            expect(findLongestWordLength2(param)).toEqual(result)
        })
    });

});
