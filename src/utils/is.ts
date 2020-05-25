export function isValidId(value: string) {
    return value && typeof value === 'string' && value.length > 1
}
