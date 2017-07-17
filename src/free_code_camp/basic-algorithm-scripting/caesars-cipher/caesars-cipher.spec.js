import { rot13 } from './caesars-cipher';
import testParams from './test.params';

/**
 * TASK: One of the simplest and most widely known ciphers is
 * a Caesar cipher, also known as a shift cipher.
 * In a shift cipher the meanings of the
 * letters are shifted by some set amount.
 *
 * A common modern use is the ROT13 cipher, where the values
 * of the letters are shifted by 13 places. Thus 'A' ↔ 'N', 'B' ↔ 'O' and so on.
 *
 * Write a function which takes a ROT13 encoded string as input and returns a decoded string.
 *
 * All letters will be uppercase. Do not transform any non-alphabetic character
 * (i.e. spaces, punctuation), but do pass them on.
 */
describe('rot13 function tests: ', () => {

   it('should be defined', () => {
       expect(rot13).toBeDefined();
   });

    testParams.forEach(({ param, result }) => {
        it(`should return ${JSON.stringify(result)} using the param: ${JSON.stringify(param)}`, () => {
            expect(rot13(param)).toEqual(result)
        })
    });

});