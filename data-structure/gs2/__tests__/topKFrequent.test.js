const topKFrequent = require('./../topKFrequent')

test('nums = [1,1,1,2,2,3], k = 3', () => {
    let nums = [1,1,1,2,2,3], k = 3;
    expect(topKFrequent(nums, k)).toEqual([1, 2, 3])
})
test('nums = [1,1,2,2,2,3], k = 2', () => {
    let nums = [1,1,2,2,2,3], k = 2;
    expect(topKFrequent(nums, k)).toEqual([2, 1])
})
test('nums =  [1,1,1,2,2,3,3,3,3], k = 1', () => {
    let nums =  [1,1,1,2,2,3,3,3,3], k = 1;
    expect(topKFrequent(nums, k)).toEqual([3])
})
