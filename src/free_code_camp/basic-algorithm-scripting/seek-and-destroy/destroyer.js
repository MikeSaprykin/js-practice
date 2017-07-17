/**
 * Declarative implementation of the function.
 *
 * Takes an array and any number of arguments. And filters
 * the array for elements, which are not provided in arguments
 *
 * @param array
 * @return {Array}
 */
export function destroyer (array) {
    const checkingArray = Array.prototype.slice.call(arguments, 1);

    return array.filter(function(value) {
        return checkingArray.indexOf(value) === -1;
    })
}


/**
 * Imperative implementation of the function.
 *
 * Takes an array and any number of arguments. And filters
 * the array for elements, which are not provided in arguments
 *
 * @param array
 * @return {Array}
 */
export function destroyer2 (array) {

    const checkArray = [];

    for(let i = 1; i < arguments.length; i++ ) {
        checkArray.push(arguments[i])
    }

    const resultArray = [];

    for(let i = 0; i < array.length; i++) {
        if(checkArray.indexOf(array[i]) === -1) {
            resultArray.push(array[i])
        }
    }

    return resultArray;
}

/**
 * Modern ES6 implementation of the function
 *
 * As arrow function doesn't have common arguments object
 * other arguments can be gathered by the spread operator.
 *
 * ES6 {@link Array.prototype.includes} gives and easy way to check for
 * some elements in the array. A bit clearer and easier,
 * than using indexOf as includes returns a boolean
 *
 * @param array
 * @param rest
 */
export const destroyer3 = (array, ...rest) => array.filter(value => !rest.includes(value));