import {
    diffArray,
    diffArray2
} from './diff-two-array';
import testParams from './test.params';

/**
 * TASK: Compare two arrays and return a new array
 * with any items only found in one of the two
 * given arrays, but not both. In other words,
 * return the symmetric difference of the two arrays.
 */
describe('diffArray function tests, declarative style: ', () => {

    it('should be defined: ', () => {
        expect(diffArray).toBeDefined();
    });

    testParams.forEach(({ param, result }) => {
        it(`should return ${JSON.stringify(result)} using the param: ${JSON.stringify(param)}`, () => {
            expect(diffArray(param[0], param[1])).toEqual(result)
        })
    });

});

describe('diffArray2 function tests: ', () => {

    it('should be defined: ', () => {
        expect(diffArray2).toBeDefined();
    });

    testParams.forEach(({ param, result }) => {
        it(`should return ${JSON.stringify(result)} using the param: ${JSON.stringify(param)}`, () => {
            expect(diffArray2(param[0], param[1])).toEqual(result)
        })
    });

});
