import { chunkArraysInGroup } from './chunk-arrays-in-group';
import testParams from './test.params';

/**
 * TASK: Write a function that splits an array (first argument)
 * into groups the length of size (second argument)
 * and returns them as a two-dimensional array.
 */
describe('chunkArrayInGroups function tests: ', () => {

    it('should be defined', () => {
        expect(chunkArraysInGroup).toBeDefined()
    });

    it('should return expected result', () => {
        const { param, result } = testParams[0];
        expect(chunkArraysInGroup(param[0], param[1])).toEqual(result)
    });

});
