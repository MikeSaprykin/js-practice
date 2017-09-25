/**
 * function to get an array of largest numbers in four arrays
 *
 * Declarative style
 * @param array
 * @return {Array}
 */
export const largestOfFour = (array) => array.map(element => element.sort((a, b) => b - a)[0]);

/**
 * function to get an array of largest numbers in four arrays
 *
 * Declarative style using Math.max and spread operator
 * @param array
 * @return {Array}
 */
export const largestOfFour2 = (array) => array.map(numbers => Math.max(...numbers));

/**
 * function to get an array of largest numbers in four arrays
 *
 * imperative style
 * @param array
 * @return {Array}
 */
export const largestOfFour3 = (array) => {
    const resultArray = [];

    for (let i = 0; i < array.length; i++) {
        let largestNumber = 0 ;
        for (let j = 0; j < array[i].length; j++) {
            if (array[i][j] > largestNumber) {
                largestNumber = array[i][j];
            }
        }
        resultArray.push(largestNumber);
    }

    return resultArray;
};
