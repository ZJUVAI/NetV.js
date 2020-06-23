/**
 * Test whether a string can be a valid id of a Node.
 * @param {string} value: the string tobe tested
 * @returns {boolean}
 */
export function isValidId(value: string) {
    return value !== undefined && typeof value === 'string' && value.length > 0
}
