import { palindrome } from './palindrome';
import testParams from './test.params';

describe('palindrome function tests: ', () => {
    it('should be defined', () => {
        expect(palindrome).toBeDefined()
    });

    testParams.forEach(({ param, result }, index) => {
        it(`should return expected result using given params with testParams at index ${index}`, () => {
            expect(palindrome(param)).toEqual(result)
        })
    });
});
