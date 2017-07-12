import { repeatStringNumTimes } from './repeat-string';
import testParams from './test.params';

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
