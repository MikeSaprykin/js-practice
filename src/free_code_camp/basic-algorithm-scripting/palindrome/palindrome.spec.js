import { palindrome } from './palindrome';
import testParams from './test.params';

/**
 * TASK: A palindrome is a word or sentence that's spelled the
 * same way both forward and backward, ignoring punctuation,
 * case, and spacing.
 */

describe('palindrome function tests: ', () => {
    it('should be defined', () => {
        expect(palindrome).toBeDefined()
    });

    testParams.forEach(({ param, result }) => {
        it(`should return ${JSON.stringify(result)} using the param: ${JSON.stringify(param)}`, () => {
            expect(palindrome(param)).toEqual(result)
        })
    });
});
