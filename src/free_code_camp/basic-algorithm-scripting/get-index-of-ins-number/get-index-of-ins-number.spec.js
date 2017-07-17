import { getIndexOfInsertedNumber } from './get-index-of-ins-number';
import testParams from './test.params';

/**
 * TASK: Return the lowest index at which a value (second argument)
 * should be inserted into an array (first argument)
 * once it has been sorted. The returned value should be a number.
 *
 * @example, getIndexOfInsertedNumber([1,2,3,4], 1.5) should
 * return 1 because it is greater than 1 (index 0), but less than 2 (index 1).
 *
 * Likewise, getIndexOfInsertedNumber([20,3,5], 19) should return
 * 2 because once the array has been sorted it will look
 * like [3,5,20] and 19 is less than 20 (index 2)
 * and greater than 5 (index 1).
 */
describe('positionInArray function tests: ', () => {

    it('should be defined', () => {
        expect(getIndexOfInsertedNumber).toBeDefined();
    });

    testParams.forEach(({ param, result }) => {
        it(`should return ${JSON.stringify(result)} using the param: ${JSON.stringify(param)}`, () => {
            expect(getIndexOfInsertedNumber(param[0], param[1])).toEqual(result)
        })
    });

});
