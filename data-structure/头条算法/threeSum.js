/**
 三数之和
 给定一个包含 n 个整数的数组 nums，判断 nums 中是否存在三个元素 a，b，c ，使得 a + b + c = 0 ？找出所有满足条件且不重复的三元组。

 注意：答案中不可以包含重复的三元组。

 例如, 给定数组 nums = [-1, 0, 1, 2, -1, -4]，

 满足要求的三元组集合为：
 [
 [-1, 0, 1],
 [-1, -1, 2]
 ]
 * @param {number[]} nums
 * @return {number[][]}
 */
// var threeSum = function (nums) {
//     let resultList = []
//     for (let i = 0; i < nums.length; i++) {
//         for (let j = i + 1; j < nums.length; j++) {
//             for (let k = j + 1; k < nums.length; k++) {
//                 if ((nums[i] + nums[j] + nums[k]) !== 0) continue
//                 let result = [nums[i], nums[j], nums[k]].sort((a, b) => a < b ? 1 : -1)
//
//
//                 let has=false
//                 for(let r of resultList){
//                     if (r[0]===result[0]&&r[1]===result[1]&&r[2]===result[2]){
//                         has=true
//                         break
//                     }
//                 }
//                 if (has) continue
//
//
//                 resultList.push(result)
//             }
//         }
//     }
//     // resultList=resultList.map(r=>r.split(',').map(r2=>+r2))
//     return resultList
// };


// var threeSum = function (nums) {
//     nums = nums.sort((a, b) => a > b ? 1 : -1)
//     let markIndex = 0
//     for (let i = 0; i < nums.length; i++) {
//         if (nums[i] < 0 && nums[i + 1] >= 0) {
//             markIndex = i + 1
//         }
//     }
//
//     let resultList = []
//
//     let isEnd = false
//
//     for (let i = 0; i < nums.length; i++) {
//         // 如果第一个数>0 就直接结束
//         if (isEnd) break
//         if (nums[i] > 0) break
//         for (let j = i + 1; j < nums.length; j++) {
//             let two = nums[i] + nums[j]
//             if (two > 0 && nums[j] > 0) {
//                 isEnd=true
//                 break;
//             }
//             let start = j + 1, end = nums.length
//
//             if (two > 0 && nums[j + 1] > 0)
//
//                 if (two > 0) {
//                     end = markIndex + 1
//                 } else {
//                     start = markIndex > start ? markIndex : start
//                 }
//
//             for (let k = start; k < end; k++) {
//                 if ((two !== -nums[k])) continue
//                 let result = [nums[i], nums[j], nums[k]].sort((a, b) => a < b ? 1 : -1)
//                 let has = false
//                 for (let r of resultList) {
//                     if (r[0] === result[0] && r[1] === result[1] && r[2] === result[2]) {
//                         has = true
//                         break
//                     }
//                 }
//                 if (has) continue
//
//
//                 resultList.push(result)
//             }
//         }
//     }
//     return resultList
// };

var threeSum = function (nums) {
    nums = nums.sort((a, b) => a > b ? 1 : -1)
    let markIndex = 0
    for (let i = 0; i < nums.length; i++) {
        if (nums[i] < 0 && nums[i + 1] >= 0) {
            markIndex = i + 1
        }
    }

    let isEnd = false

    let resultList = []

    for (let i = 0; i < nums.length - 2; i++) {
        if (isEnd || nums[i] > 0) {
            break
        }
        for (let j = i + 1; j < nums.length - 1; j++) {
            if (isEnd) break

            let twoSum = nums[i] + nums[j]
            let start = j + 1
            let end = nums.length
            if (twoSum < 0) {
                start = markIndex > start ? markIndex : start
            } else {
                // 大于0，那么只能在j+1 和 markIndex+1
                end = markIndex + 1
            }
            console.log(twoSum,start,end)
            for (let k = start; k < end; k++) {
                if (twoSum + nums[k] === 0) {
                    let has = false
                    for (let h = 0; h < resultList.length; h++) {
                        if (resultList[h][0] === nums[i] && resultList[h][1] === nums[j] && resultList[h][2] === nums[k]) {
                            has = true
                        }
                    }
                    if (!has) {
                        resultList.push([nums[i], nums[j], nums[k]])
                    }
                    break
                }
            }

        }
    }
    return resultList
};

module.exports = threeSum