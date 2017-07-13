import {
    truncateString,
    truncateString2
} from './truncate-string';
import testParams from './test.params';

/**
 * TASK: Truncate a string (first argument) if it is longer than
 * the given maximum string length (second argument).
 * Return the truncated string with a ... ending.
 *
 * Note that inserting the three dots to the end will add to the string length.
 *
 * However, if the given maximum string length num
 * is less than or equal to 3, then the addition of
 * the three dots does not add to the string length
 * in determining the truncated string.
 *
 */
describe('truncateString function tests, declarative: ', () => {

    it('should be defined', () => {
        expect(truncateString).toBeDefined();
    });

    testParams.forEach(({ param, result }) => {
        it(`should return ${JSON.stringify(result)} using the param: ${JSON.stringify(param)}`, () => {
            expect(truncateString(param[0], param[1])).toEqual(result)
        })
    });
});

describe('truncateString function tests, imperative: ', () => {

    it('should be defined', () => {
        expect(truncateString2).toBeDefined();
    });

    testParams.forEach(({ param, result }) => {
        it(`should return ${JSON.stringify(result)} using the param: ${JSON.stringify(param)}`, () => {
            expect(truncateString2(param[0], param[1])).toEqual(result)
        })
    });
});
