const add = require('./../curryAdd')

test('2,3 => 5', () => {
    expect(add(2, 3)).toEqual(5)
})

test('1,2,3,4', () => {
    expect(add(1)(2)).toEqual(3)
})
test('1,2,3,4', () => {
    let curryAdd = add(2);
    expect(curryAdd(3)).toEqual(5)
})
