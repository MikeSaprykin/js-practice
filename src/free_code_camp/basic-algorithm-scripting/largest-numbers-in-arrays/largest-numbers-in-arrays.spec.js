import {
    largestOfFour,
    largestOfFour2
} from './largest-numbers-in-arrays';
import testParams from './test.params';

/**
 * TASK: Return an array consisting of the largest number from
 * each provided sub-array. For simplicity, the provided
 * array will contain exactly 4 sub-arrays.
 */
describe('largestOfFour function tests, declarative ', () => {

    it('should be defined', () => {
        expect(largestOfFour).toBeDefined();
    });

    testParams.forEach(({ param, result }) => {
        it(`should return ${JSON.stringify(result)} using the param: ${JSON.stringify(param)}`, () => {
            expect(largestOfFour(param)).toEqual(result)
        })
    });

});

describe('largestOfFour2 function tests, imperative ', () => {

    it('should be defined', () => {
        expect(largestOfFour2).toBeDefined();
    });

    testParams.forEach(({ param, result }) => {
        it(`should return ${JSON.stringify(result)} using the param: ${JSON.stringify(param)}`, () => {
            expect(largestOfFour2(param)).toEqual(result)
        })
    });

});
