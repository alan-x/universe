const longestCommonPrefix=require('./../longestCommonPrefix.js')

test('有', () => {
    expect(longestCommonPrefix(["flower","flow","flight"])).toBe('fl')
})
test('无', () => {
    expect(longestCommonPrefix(["dog","racecar","car"])).toBe('')
})
test('空', () => {
    expect(longestCommonPrefix([])).toBe('')
})
test('全是空', () => {
    expect(longestCommonPrefix(['',''])).toBe('')
})