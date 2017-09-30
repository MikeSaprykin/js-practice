import { convertToRomans } from './convert-to-romans';
import testParams from './test.params';

describe('convertToRomans function tests ->', () => {
    testParams.forEach(({ param, result }) => {
        it(`should return ${JSON.stringify(result)} using the param: ${JSON.stringify(param)}`, () => {
            expect(convertToRomans(param)).toEqual(result)
        })
    });
});
