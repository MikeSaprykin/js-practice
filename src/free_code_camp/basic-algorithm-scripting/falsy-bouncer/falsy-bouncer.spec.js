import { falsyBouncer } from './falsy-bouncer';
import testParams from './test.params';

/**
 * TASK: Remove all falsy values from an array.
 * Falsy values in JavaScript are false, null, 0, "", undefined, and NaN.
 */
describe('falsyBouncer function tests: ', () => {

    it('should be defined', () => {
        expect(falsyBouncer).toBeDefined();
    });

    testParams.forEach(({ param, result }) => {
        it(`should return ${JSON.stringify(result)} using the param: ${JSON.stringify(param)}` , () => {
            expect(falsyBouncer(param)).toEqual(result)
        })
    });

});
