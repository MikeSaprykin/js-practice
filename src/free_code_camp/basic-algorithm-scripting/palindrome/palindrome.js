import { reverseString } from '../reverse-string';

const REGEX = /[^a-z0-9]+/ig;

/**
 * Function to check string for a palindrome
 * Using the {@link reverseString} method
 *
 * @param string
 * @returns {boolean}
 */
export const palindrome = (string) => {
    const clearedString = string.toLowerCase().replace(REGEX, '');
    return clearedString === reverseString(clearedString);
};