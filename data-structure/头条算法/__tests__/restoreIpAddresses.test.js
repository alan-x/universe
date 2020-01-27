const restoreIpAddresses = require('./../restoreIpAddresses')

test('', () => {
    expect(restoreIpAddresses('25525511135')).toBe('/home')
})