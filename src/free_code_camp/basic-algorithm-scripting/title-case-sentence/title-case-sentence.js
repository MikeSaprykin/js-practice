/**
 * A function to title case the sentence
 *
 * Declarative style
 * @param sentence
 * @returns {string}
 */
export const titleCaseSentence = (sentence) => {
    return sentence.toLowerCase().split(' ').map(word => {
        return word[0].toUpperCase() + word.slice(1);
    }).join(' ')
};

/**
 * A function to title case the sentence
 *
 * Imperative style
 * @param sentence
 * @returns {string}
 */
export const titleCaseSentence2 = (sentence) => {
    const splitLowerCaseString = sentence.split(' ');
    let result = '';

    for(let i = 0; i < splitLowerCaseString.length; i++) {
        const word = splitLowerCaseString[i].toLowerCase();
        if(i > 0) {
            result += ' ';
        }
        result += word.charAt(0).toUpperCase() + word.slice(1);
    }

    return result;
};