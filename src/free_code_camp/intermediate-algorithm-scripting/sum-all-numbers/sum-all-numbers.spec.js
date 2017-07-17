import { sumAllNumbers } from './sum-all-numbers';
import testParams from './test.params';

/**
 * TASK: We'll pass you an array of two numbers.
 * Return the sum of those two numbers and all numbers between them.
 *
 * The lowest number will not always come first.
 */
describe('sumAllNumbers function tests: ', () => {

    it('should be defined', () => {
        expect(sumAllNumbers).toBeDefined();
    });

    testParams.forEach(({ param, result }) => {
        it(`should return ${JSON.stringify(result)} using the param: ${JSON.stringify(param)}`, () => {
            expect(sumAllNumbers(param)).toEqual(result)
        })
    });

});
