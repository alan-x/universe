const  isValid=require('./../isValid')
test('(',()=>{
    expect(isValid('()')).toBe(true)
})
test('[]',()=>{
    expect(isValid('[]')).toBe(true)
})

test('{}',()=>{
    expect(isValid('{}')).toBe(true)
})

test('()[]{}',()=>{
    expect(isValid('()[]{}')).toBe(true)
})

test('(]',()=>{
    expect(isValid('(]')).toBe(false)
})
test('{[]}',()=>{
    expect(isValid('{[]}')).toBe(true)
})