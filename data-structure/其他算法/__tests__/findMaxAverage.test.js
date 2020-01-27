const  findMaxAverage=require('./../findMaxAverage')
test('',()=>{
    expect(findMaxAverage([1,12,-5,-6,50,3],4)).toBe(12.75)
})