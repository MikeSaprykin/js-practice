import { confirmEnding } from './confirm-ending';
import testParams from './test.params';

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
