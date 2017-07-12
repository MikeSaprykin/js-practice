/**
 * Confirm ending function, that takes a string and an ending.
 * Returns a boolean if string is ending on the string, passed as ending param
 *
 * @param string
 * @param ending
 * @return {boolean}
 */
export const confirmEnding = (string, ending) => {
    return string.substr(string.length - ending.length) === ending
};
