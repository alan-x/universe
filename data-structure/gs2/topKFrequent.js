/*
已知⼀个 int 数组，数组中每个数字出现的频率都不相同，实现⼀个 topKFrequent 函数返回
该数组中频率前 K ⾼的数字。
 */
function topKFrequent(nums, k) {
    let result = {}
    nums.forEach(n => {
        result[n] ? (result[n] = result[n] + 1) : (result[n] = 1)
    })

    return Object.keys(result).map(k => ({
        num: k,
        times: result[k]
    })).sort((a, b) => a.times < b.times ? 1 : -1).splice(0, k).map(n => +n.num)

}

module.exports = topKFrequent
