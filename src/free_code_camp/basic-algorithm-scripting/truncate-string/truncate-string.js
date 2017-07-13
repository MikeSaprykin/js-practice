const DOTS = '...';

/**
 * A function to truncate given string with given maxStringLength
 *
 * Declarative, with ternary operators
 * @param string - a string for being truncated
 * @param maxStringLength - a number, from which truncate should start
 * @return {string}
 */
export const truncateString = (string, maxStringLength) => {
    maxStringLength = string.length > maxStringLength && maxStringLength >= DOTS.length ?
        maxStringLength - DOTS.length : maxStringLength;

    return maxStringLength < string.length ? string.slice(0, maxStringLength).concat(DOTS) : string;
};

/**
 * A function to truncate given string with given maxStringLength
 *
 * Imperative, with if statements
 * @param string
 * @param maxStringLength
 * @return {*}
 */
export const truncateString2 = (string, maxStringLength) => {
    let actualMaxStringLength = maxStringLength;
    let result = string;

    if(string.length > maxStringLength && maxStringLength >= DOTS.length) {
        actualMaxStringLength = maxStringLength - DOTS.length
    }

    if(actualMaxStringLength < string.length) {
        result = string.slice(0, actualMaxStringLength) + DOTS;
    }
    return result;
};
