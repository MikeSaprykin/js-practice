import romanSymbols from './convert-to-romans.constants';
import { objKeys } from '../../../helpers';

const getSubtractSymbolAndNextSymbol = (keys, number) => {
    const nextSymbol = keys.filter(key => key >= number)[0];
    const subtractSymbol = nextSymbol - number;
    return subtractSymbol > 0 && romanSymbols[subtractSymbol] ?
};

export const convertToRomans = (number) => {
    if (number === 0) {
        return '';
    } else {
        const keys = objKeys(romanSymbols);
        const nextSymbol = keys.filter(key => key >= number)[0];
        const subtractSymbol = nextSymbol - number;
        return subtractSymbol > 0 && romanSymbols[subtractSymbol] ?
            romanSymbols[subtractSymbol] + romanSymbols[nextSymbol] :
            keys.filter(key => number >= key)
                .reduce((acc, key) =>
                    romanSymbols[key] + convertToRomans(number - key), '');
    }
};
