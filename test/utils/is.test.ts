import { isValidId } from '../../src/utils/is'

/**
 * @description isValidId is used for judge whether a string is a valid id
 * @description ID is valid means that it is a string with length more than 0.
 * */
test("'' is not a valid id", () => {
    expect(isValidId('')).toBe(false)
})
test("'1' is a valid id", () => {
    expect(isValidId('1')).toBe(true)
})
test('undefined is not a valid id', () => {
    expect(isValidId(undefined)).toBe(false)
})
test('null is not a valid id', () => {
    expect(isValidId(null)).toBe(false)
})
test('"-1" is a valid id', () => {
    expect(isValidId('-1')).toBe(true)
})
