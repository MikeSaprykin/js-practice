import {
    mutation,
    mutation2
} from './mutations';
import testParams from './test.params';

/**
 * TASK: Return true if the string in the
 * first element of the array
 * contains all of the letters of the string
 * in the second element of the array.
 *
 * For example, ["hello", "Hello"], should return true because
 * all of the letters in the second string are
 * present in the first, ignoring case.
 *
 * The arguments ["hello", "hey"] should return
 * false because the string "hello" does not contain a "y".

 * Lastly, ["Alien", "line"], should return true
 * because all of the letters in "line" are present in "Alien".
 */
describe('mutation function tests: ', () => {

    it('should be defined', () => {
        expect(mutation).toBeDefined()
    });

    testParams.forEach(({ param, result }) => {
        it(`should return ${JSON.stringify(result)} using the param: ${JSON.stringify(param)}` , () => {
            expect(mutation(param)).toEqual(result)
        })
    });

});

describe('mutation2 function tests: ', () => {

    it('should be defined', () => {
        expect(mutation2).toBeDefined()
    });

    testParams.forEach(({ param, result }) => {
        it(`should return ${JSON.stringify(result)} using the param: ${JSON.stringify(param)}` , () => {
            expect(mutation2(param)).toEqual(result)
        })
    });

});
