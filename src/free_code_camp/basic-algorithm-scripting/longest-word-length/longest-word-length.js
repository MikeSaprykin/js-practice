/**
 * Function to get the length of the longest word
 * Declarative style
 * @param str
 * @returns {*}
 */
export const findLongestWordLength = (str) => {
    return str.split(' ').map(word => word.length).sort((a, b) => b - a)[0]
};

/**
 * Function to get the length of the longest word
 * Imperative style
 * @param str
 * @returns {number}
 */
export const findLongestWordLength2 = (str) => {
    const splitString = str.split(' ');

    let longestWordLength = 0;

    for(let i = 0; i < splitString.length; i++) {
        let latestLength = splitString[i].length;
        if(latestLength > longestWordLength) {
            longestWordLength = latestLength;
        }
    }
    return longestWordLength;
};
