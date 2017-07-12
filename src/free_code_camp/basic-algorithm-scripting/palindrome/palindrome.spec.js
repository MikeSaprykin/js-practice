import { palindrome } from './palindrome';
import testParams from './test.params';

describe('palindrome function tests: ', () => {
    it('should be defined', () => {
        expect(palindrome).toBeDefined()
    });

    testParams.forEach(({ param, result }) => {
        it(`should return ${JSON.stringify(result)} using ${JSON.stringify(param)}`, () => {
            expect(palindrome(param)).toEqual(result)
        })
    });
});
