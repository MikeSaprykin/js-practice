/**
 * Slasher method using slice. Not mutating existing array
 * @param array
 * @param howMany
 */
export const slasher = (array, howMany) => array.slice(howMany);

/**
 * Slasher method using splice. Mutating existing array
 * @param array
 * @param howMany
 */
export const slasher2 = (array, howMany) => array.splice(howMany);
