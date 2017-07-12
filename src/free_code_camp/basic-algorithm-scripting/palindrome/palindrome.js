import { reverseString } from '../reverse-string';

const REGEX = /[^a-z0-9]+/ig;

/**
 * Function to check string for a palindrome
 * Using the {@link reverseString} method
 *
 * A palindrome is a word or sentence that's spelled the
 * same way both forward and backward, ignoring punctuation,
 * case, and spacing.
 *
 * @param string
 * @returns {boolean}
 */
export const palindrome = (string) => {
    const clearedString = string.toLowerCase().replace(REGEX, '');
    return clearedString === reverseString(clearedString);
};