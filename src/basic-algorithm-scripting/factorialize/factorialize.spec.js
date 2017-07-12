import { factorialize, factorialize2 } from './factorialize';

const testParams = [
    {
        param: 5,
        result: 120
    },
    {
        param: 0,
        result: 1
    },
    {
        param: 10,
        result: 3628800
    }
];

describe('declarative factorialize function tests: ', () => {

    it('should be defined', () => {
        expect(factorialize).toBeDefined();
    });

    it('should return numbers using the params equal to each result', () => {
        testParams.forEach(({param, result}) => {
            expect(factorialize(param)).toEqual(result)
        });
    });

});

describe('imperative factorialize2 function tests: ', () => {

    it('should be defined', () => {
        expect(factorialize2).toBeDefined();
    });

    it('should return numbers using the params equal to each result', () => {
        testParams.forEach(({param, result}) => {
            expect(factorialize2(param)).toEqual(result)
        });
    });

});

