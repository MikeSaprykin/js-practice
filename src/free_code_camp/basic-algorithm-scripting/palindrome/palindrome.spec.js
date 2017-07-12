import { palindrome } from './palindrome';
import testParams from './test.params';

describe('palindrome function tests: ', () => {
    it('should be defined', () => {
        expect(palindrome).toBeDefined()
    });

    it('should return expected boolean using the params equal to each result', () => {
        testParams.forEach(({param, result}) => {
            expect(palindrome(param)).toEqual(result)
        });
    });
});
