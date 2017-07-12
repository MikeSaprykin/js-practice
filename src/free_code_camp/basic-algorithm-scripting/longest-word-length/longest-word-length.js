/**
 * Function to get the length of the longest word
 * Declarative style
 * @param str
 * @returns {*}
 */
export const findLongestWordsLength = (str) => {
    return str.split(' ').map(word => word.length).sort((a, b) => b - a)[0]
};
