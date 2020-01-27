const simplifyPath = require('./../simplifyPath')

test('', () => {
    expect(simplifyPath('/home/')).toBe('/home')
})
test('', () => {
    expect(simplifyPath('/a/./b/../../c/')).toBe('/c')
})
test('', () => {
    expect(simplifyPath('/../')).toBe('/')
})
test('', () => {
    expect(simplifyPath('/..')).toBe('/')
})
test('', () => {
    expect(simplifyPath('/...')).toBe('/...')
})
test('', () => {
    expect(simplifyPath("/abc/...")).toBe("/abc/...")
})
test('', () => {
    expect(simplifyPath("/..hidden")).toBe("/..hidden")
})
test('', () => {
    expect(simplifyPath("/.hidden")).toBe("/.hidden")
})