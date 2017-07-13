/**
 * A function, that returns a boolean, if a first string
 * of array contains every letter contained in the second
 * string
 *
 * Declarative style
 * @param array
 * @return {boolean}
 */
export const mutation = (array) => {
    return array[1]
            .toLowerCase()
            .split('')
            .map(char => array[0].toLowerCase().includes(char))
            .indexOf(false) === -1;
};

/**
 * A function, that returns a boolean, if a first string
 * of array contains every letter contained in the second
 * string
 *
 * Imperative style
 * @param array
 * @return {boolean}
 */
export const mutation2 = (array) => {
    const stringToSearchIn = array[0].toLowerCase();
    const stringToBeSearched = array[1].toLowerCase();

    for(let i = 0; i < stringToBeSearched.length; i++ ) {
        if(!stringToSearchIn.includes(stringToBeSearched[i])) {
            return false;
        }
    }
    return true;
};
