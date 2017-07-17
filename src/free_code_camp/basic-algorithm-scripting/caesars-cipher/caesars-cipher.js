const ROT13 = 13;

/**
 * ROT13 decode function implementation
 * @param string
 */
export const rot13 = (string) => {
    return string.replace( /[A-Z]/gi , (char) => {
        const decodedCharCode = char.charCodeAt(0) + (char <= 'M' ? ROT13 : -ROT13);
        return String.fromCharCode(decodedCharCode);
    } );
};