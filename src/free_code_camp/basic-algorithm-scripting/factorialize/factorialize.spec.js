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

    testParams.forEach(({ param, result }) => {
        it(`should return ${JSON.stringify(result)} using the param: ${JSON.stringify(param)}`, () => {
            expect(factorialize(param)).toEqual(result)
        })
    });

});

describe('imperative factorialize2 function tests: ', () => {

    it('should be defined', () => {
        expect(factorialize2).toBeDefined();
    });

    testParams.forEach(({ param, result }) => {
        it(`should return ${JSON.stringify(result)} using the param: ${JSON.stringify(param)}`, () => {
            expect(factorialize2(param)).toEqual(result)
        })
    });

});

