/**
 给定 n 个整数，找出平均数最大且长度为 k 的连续子数组，并输出该最大平均数。

 示例 1:

 输入: [1,12,-5,-6,50,3], k = 4
 输出: 12.75
 解释: 最大平均数 (12-5-6+50)/4 = 51/4 = 12.75


 注意:

 1 <= k <= n <= 30,000。
 所给数据范围 [-10,000，10,000]。
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var findMaxAverage = function (nums, k) {
    let max = 0
    for (let i = 0; i < nums.length - k; i++) {
        let j = i
        let result = 0
        while (j - i < k) {
            result += nums[j]
            j += 1
        }
        result = result / k
        max = Math.max(max, result)
    }
    return max
};
module.exports=findMaxAverage