import {
    mutation,
    mutation2
} from './mutations';
import testParams from './test.params';

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
