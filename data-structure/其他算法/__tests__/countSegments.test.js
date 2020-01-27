const  countSegments=require('./../countSegments')
test('one',()=>{
    expect(countSegments('hello')).toBe(1)
})

test('more ',()=>{
    expect(countSegments('hello world')).toBe(2)
})
test('标点符号',()=>{
    expect(countSegments("Hello, my name is John")).toBe(5)
})
