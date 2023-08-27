/**
 * Custom To string method
 *
 * @param string string
 * @returns string
 */
export const customToString = (string: string | any) => {
    return string ? string.toString() : '';
};

/**
 * The function `stringTrim` takes a string as input and returns the same string with leading and
 * trailing whitespace removed.
 * @param {string} str - The parameter "str" is a string type parameter that represents the input
 * string that needs to be trimmed. The "trim()" method removes whitespace from both ends of the
 * string.
 * @returns The `stringTrim` function is returning a trimmed version of the input string. The `trim()`
 * method removes whitespace from both ends of a string.
 */
export const stringTrim = (str: string) => {
    return str.trim();
};

/**
 * First Letter Caps
 * @param string
 */
export const firstLetterCaps = (string: string | null) => {
    if (string) {
        const convertString = string.charAt(0).toUpperCase() + string.slice(1);
        return convertString.trim();
    }
    return '';
};
