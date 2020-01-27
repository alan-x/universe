const addStrings = require('./../addStrings')

test('match', () => {
    expect(addStrings('1', '1')).toBe(2)
})
test('overflow', () => {
    expect(addStrings('9', '9')).toBe(18)
})

test('more one', () => {
    expect(addStrings('91', '9')).toBe(100)
})