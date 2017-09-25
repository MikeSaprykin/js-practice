import romanSymbols from './convert-to-romans.constants';

export const convertToRomans = (number) => {
    return number === 0 ? '' :
    romanSymbols
        .filter(({value}) => number >= value)
        .reduce((acc, {char, value}) => char + convertToRomans(number - value), '')
};
