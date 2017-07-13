import {
    chunkArraysInGroup,
    chunkArraysInGroup2
} from './chunk-arrays-in-group';
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

    testParams.forEach(({ param, result }) => {
        it(`should return ${JSON.stringify(result)} using the param: ${JSON.stringify(param)}`, () => {
            expect(chunkArraysInGroup(param[0], param[1])).toEqual(result)
        })
    });

});

describe('chunkArrayInGroups2 function tests: ', () => {

    it('should be defined', () => {
        expect(chunkArraysInGroup2).toBeDefined()
    });

    testParams.forEach(({ param, result }) => {
        it(`should return ${JSON.stringify(result)} using the param: ${JSON.stringify(param)}`, () => {
            expect(chunkArraysInGroup2(param[0], param[1])).toEqual(result)
        })
    });

});