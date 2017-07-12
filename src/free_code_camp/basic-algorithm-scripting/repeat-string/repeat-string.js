/**
 * Function, to repeat the string given number of times
 *
 * @param string
 * @param times
 * @return {string}
 */
export const repeatStringNumTimes = (string, times) => {
    return times > 0 ? string.repeat(times) : ''
};
