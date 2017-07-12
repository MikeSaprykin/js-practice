import {
    reverseString,
    reverseString2
} from './reverse-string';

const params = 'Hello!';
const expectedResult = '!olleH';

describe('declarative reverseString function tests: ', () => {

    it('should be defined', () => {
        expect(reverseString).toBeDefined();
    });

    it('should return string equal to expectedResult', () => {
        expect(reverseString(params)).toEqual(expectedResult)
    });
});

describe('imperative reverseString functions tests: ', () => {

    it('should be defined', () => {
        expect(reverseString2).toBeDefined();
    });

    it('should return string equal to expectedResult', () => {
        expect(reverseString2(params)).toEqual(expectedResult)
    })

});
