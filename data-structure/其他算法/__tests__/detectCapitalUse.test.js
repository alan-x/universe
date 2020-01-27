const  detectCapitalUse=require('./../detectCapitalUse')
test('all Capital',()=>{
    expect(detectCapitalUse('USA')).toBe(true)
})

test('首字母大写',()=>{
    expect(detectCapitalUse('Usa')).toBe(true)
})
test('全小写',()=>{
    expect(detectCapitalUse('usa')).toBe(true)
})

test('错误',()=>{
    expect(detectCapitalUse('usA')).toBe(false)
})