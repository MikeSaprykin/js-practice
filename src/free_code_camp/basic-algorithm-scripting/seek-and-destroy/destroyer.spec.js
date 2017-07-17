import {
    destroyer,
    destroyer2,
    destroyer3
} from './destroyer';

/**
 * TASK: You will be provided with an initial array
 * (the first argument in the destroyer function),
 * followed by one or more arguments.
 *
 * Remove all elements from the initial
 * array that are of the same value as these arguments.
 */

describe('destroyer declarative function tests: ', () => {

    it('should be defined', () => {
       expect(destroyer).toBeDefined();
    });

    it(`should return [1] using the param: [3, 5, 1, 2, 2], 2, 3, 5,`, () => {
        expect(destroyer([3, 5, 1, 2, 2], 2, 3, 5)).toEqual([1])
    });

    it(`should return [] using the param: [2, 3, 2, 3], 2, 3`, () => {
        expect(destroyer([2, 3, 2, 3], 2, 3)).toEqual([])
    });

    it(`should return ['hamburger'] using the param: ['tree', 'hamburger', 53], 'tree', 53`, () => {
        expect(destroyer(['tree', 'hamburger', 53], 'tree', 53)).toEqual(['hamburger'])
    });

    it(`should return [1, 1 using the param: [1, 2, 3, 1, 2, 3], 2, 3`, () => {
        expect(destroyer([1, 2, 3, 1, 2, 3], 2, 3)).toEqual([1, 1])
    });

});

describe('destroyer2 imperative function tests: ', () => {

    it('should be defined', () => {
        expect(destroyer2).toBeDefined();
    });

    it(`should return [1] using the param: [3, 5, 1, 2, 2], 2, 3, 5,`, () => {
        expect(destroyer2([3, 5, 1, 2, 2], 2, 3, 5)).toEqual([1])
    });

    it(`should return [] using the param: [2, 3, 2, 3], 2, 3`, () => {
        expect(destroyer2([2, 3, 2, 3], 2, 3)).toEqual([])
    });

    it(`should return ['hamburger'] using the param: ['tree', 'hamburger', 53], 'tree', 53`, () => {
        expect(destroyer2(['tree', 'hamburger', 53], 'tree', 53)).toEqual(['hamburger'])
    });

    it(`should return [1, 1 using the param: [1, 2, 3, 1, 2, 3], 2, 3`, () => {
        expect(destroyer2([1, 2, 3, 1, 2, 3], 2, 3)).toEqual([1, 1])
    });

});

describe('destroyer3 modern ES6 function tests: ', () => {

    it('should be defined', () => {
        expect(destroyer3).toBeDefined();
    });

    it(`should return [1] using the param: [3, 5, 1, 2, 2], 2, 3, 5,`, () => {
        expect(destroyer3([3, 5, 1, 2, 2], 2, 3, 5)).toEqual([1])
    });

    it(`should return [] using the param: [2, 3, 2, 3], 2, 3`, () => {
        expect(destroyer3([2, 3, 2, 3], 2, 3)).toEqual([])
    });

    it(`should return ['hamburger'] using the param: ['tree', 'hamburger', 53], 'tree', 53`, () => {
        expect(destroyer3(['tree', 'hamburger', 53], 'tree', 53)).toEqual(['hamburger'])
    });

    it(`should return [1, 1 using the param: [1, 2, 3, 1, 2, 3], 2, 3`, () => {
        expect(destroyer3([1, 2, 3, 1, 2, 3], 2, 3)).toEqual([1, 1])
    });

});
