const lengthOfLongestSubstring = require('./../lengthOfLongestSubstring')

test('空字符串', () => {
    expect(lengthOfLongestSubstring(' ')).toBe(1)
})

test('相同字符串', () => {
    expect(lengthOfLongestSubstring('bbbbb')).toBe(1)
})

test('正常字符串', () => {
    expect(lengthOfLongestSubstring('pwwkew')).toBe(3)
})
test('3', () => {
    expect(lengthOfLongestSubstring('cdd')).toBe(2)
})
test('3', () => {
    expect(lengthOfLongestSubstring('aab')).toBe(2)
})

test('3', () => {
    expect(lengthOfLongestSubstring('dvdf')).toBe(3)
})
test('3', () => {
    expect(lengthOfLongestSubstring("bpfbhmipx")).toBe(7)
})
test('3', () => {
    expect(lengthOfLongestSubstring("anviaj")).toBe(5)
})