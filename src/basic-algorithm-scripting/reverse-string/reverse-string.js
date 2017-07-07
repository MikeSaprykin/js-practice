/**
 * Method to reverse string, that using native reverse() method
 * @param string
 * @returns {string}
 */
export const reverseString = (string) => {
  return string.split('').reverse().join('')
};

/**
 * Method to reverse string without using reverse() method
 * @param string
 * @returns {string}
 */
export const reverseString2 = (string) => {
  let newString = '';
  for(let i = string.length - 1; i >= 0; i--) {
      newString += string[i]
  }
  return newString;
};

/**
 * Assignment the method to the global string prototype
 * @type {(p1:*)}
 */
String.prototype.reverse = reverseString2;
