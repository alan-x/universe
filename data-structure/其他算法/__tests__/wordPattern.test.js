const  wordPattern=require('./../wordPattern')
test('match',()=>{
    expect(wordPattern('abba','dog cat cat dog')).toBe(true)
})
test('not match',()=>{
    expect(wordPattern('abba','dog cat cat fish')).toBe(false)
})

test('same',()=>{
    expect(wordPattern('abba','dog dog dog dog')).toBe(false)
})

test('jquery',()=>{
    expect(wordPattern('jquery','jquery')).toBe(true)
})

test('e',()=>{
    expect(wordPattern('e','eureka')).toBe(true)
})