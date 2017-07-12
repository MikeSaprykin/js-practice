import { repeatStringNumTimes } from './repeat-string';
import testParams from './test.params';

/**
 * TASK: Repeat a given string (first argument)
 * times times (second argument).
 * Return an empty string if num is not a positive number.
 */
describe('repeatStringNumTimes function test ', () => {

    it('should be defined', () => {
        expect(repeatStringNumTimes).toBeDefined();
    });

    testParams.forEach(({ param, result }) => {
        it(`should return ${JSON.stringify(result)} using the param: ${JSON.stringify(param)}`, () => {
            expect(repeatStringNumTimes(param[0], param[1])).toEqual(result)
        })
    });

});
