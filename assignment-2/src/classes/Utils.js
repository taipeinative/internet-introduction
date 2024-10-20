/**
 * The function to remove non-numbers from the input string.
 * @param {string} text - The inputted text.
 * @returns {string} The sanitized number as a number.
 */
export function sanitizeNumber(text) {
    return text.replace(/[^\d]/g, '');
}

/**
 * The function to remove sensitive characters from the input.
 * @param {string} text - The input text.
 */
export function sanitizeText(text) {
    return text.replace(/[&"'`/]/ig, ' ').replace(/[<>]/ig, '');
}