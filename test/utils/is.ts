export function isStringSameIgnoreQuotesCase(stringA: string, stringB: string) {
    return (
        stringA.replace(/\"/g, "'").replace(/\'/g, '"') ===
        stringB.replace(/\"/g, "'").replace(/\'/g, '"')
    )
}
