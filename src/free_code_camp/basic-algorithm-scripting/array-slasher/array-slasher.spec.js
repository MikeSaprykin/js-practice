import {
    slasher,
    slasher2
} from './array-slasher';
import testParams from './test.params';

/**
 * TASK: Return the remaining elements of an array
 * after chopping off n elements from the head.
 * The head means the beginning of the array,
 * or the zeroth index.
 */
describe('slasher function tests: ', () => {

    it('should be defined', () => {
        expect(slasher).toBeDefined()
    });

    testParams.forEach(({ param, result }) => {
        it(`should return ${JSON.stringify(result)} using the param: ${JSON.stringify(param)}`, () => {
            expect(slasher(param[0], param[1])).toEqual(result)
        })
    });

});

describe('slasher2 function tests: ', () => {

    it('should be defined', () => {
        expect(slasher2).toBeDefined()
    });

    testParams.forEach(({ param, result }) => {
        it(`should return ${JSON.stringify(result)} using the param: ${JSON.stringify(param)}`, () => {
            expect(slasher2(param[0], param[1])).toEqual(result)
        })
    });

});
