import _ from 'lodash';

/**
 * Function that chunks an array into two separate arrays according to the size
 * given for the first array
 *
 * Uses lodash chunk method
 * Cheating declarative version =D
 *
 * @param array - to be chunked
 * @param size - initial size for first array
 * @return {Array}
 */
export const chunkArraysInGroup = (array, size) => _.chunk(array, size);

/**
 * Function that chunks an array into two separate arrays according to the size
 * given for the first array
 *
 * Imperative version
 * @param array - to be chunked
 * @param size - initial size for first array
 * @return {Array}
 */
export const chunkArraysInGroup2 = (array, size) => {
    let resultArray = [];
    for(let i = 0; i < array.length; i += size) {
        resultArray.push(array.slice(i, i+size));
    }
    return resultArray;
};