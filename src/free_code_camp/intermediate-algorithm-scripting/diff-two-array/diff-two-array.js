/**
 * Function for generating an array of symmetric difference of two arrays
 *
 * Declarative style
 * @param arr1
 * @param arr2
 * @return {Array.<T>}
 */
export const diffArray = (arr1, arr2) => {
    return arr1.concat(arr2).filter(value => {
       return arr1.indexOf(value) === -1 || arr2.indexOf(value) === -1;
    });
};

/**
 * Function for generating an array of symmetric difference of two arrays
 *
 * Imperative style
 * @param arr1
 * @param arr2
 * @return {Array}
 */
export const diffArray2 = (arr1, arr2) => {
    const combinedArrays = arr1.concat(arr2);
    const resultArray = [];

    for(let i = 0; i < combinedArrays.length; i++) {
        if(arr1.indexOf(combinedArrays[i]) === -1 ||
            arr2.indexOf(combinedArrays[i]) === -1) {
            resultArray.push(combinedArrays[i]);
        }
    }

    return resultArray;
};
