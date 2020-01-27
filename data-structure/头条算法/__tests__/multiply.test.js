const multiply = require('./../multiply')

test('', () => {
    expect(multiply('123', '456')).toBe('56088')
})

test('', () => {
    expect(multiply('9', '99')).toBe('891')
})
test('', () => {
    expect(multiply('999', '999')).toBe("998001")
})
test('', () => {
    expect(multiply('9133', '0')).toBe("0")
})
test('', () => {
    expect(multiply('140', '721')).toBe("100940")
})