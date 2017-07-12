import {
    titleCaseSentence,
    titleCaseSentence2
} from './title-case-sentence';
import testParams from './test.params';

/**
 * Return the provided string with the first letter of each word capitalized.
 * Make sure the rest of the word is in lower case.
 */
describe('titleCaseSentence function tests, declarative: ', () => {

    it('should be defined', () => {
        expect(titleCaseSentence).toBeDefined();
    });

    testParams.forEach(({ param, result }) => {
        it(`should return ${JSON.stringify(result)} using ${JSON.stringify(param)}`, () => {
            expect(titleCaseSentence(param)).toEqual(result)
        })
    });

});

describe('titleCaseSentence2 function tests, imperative: ', () => {

    it('should be defined', () => {
        expect(titleCaseSentence2).toBeDefined();
    });

    testParams.forEach(({ param, result }) => {
        it(`should return ${JSON.stringify(result)} using ${JSON.stringify(param)}`, () => {
            expect(titleCaseSentence2(param)).toEqual(result)
        })
    });

});
