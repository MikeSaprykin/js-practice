import { confirmEnding } from './confirm-ending';
import testParams from './test.params';

/**
 * TASK: Check if a string (first argument, string)
 * ends with the given target string (second argument, ending).
 * This challenge can be solved with the .endsWith()
 * method, which was introduced in ES2015. But for the purpose
 * of this challenge, we would like you to use one of
 * the JavaScript substring methods instead.
 */
describe('confirmEnding function tests: ', () => {

    it('should be defined', () => {
        expect(confirmEnding).toBeDefined();
    });

    testParams.forEach(({ param, result }) => {
        it(`should return ${JSON.stringify(result)} using the param: ${JSON.stringify(param)}`, () => {
            expect(confirmEnding(param[0], param[1])).toEqual(result)
        })
    });

});
