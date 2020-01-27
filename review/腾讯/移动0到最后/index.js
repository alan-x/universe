/*
1. 把0移动到数组后面
Given an array nums, write a function to move all 0's to the end of it while maintaining the relative order of the non-zero elements.

For example, given nums = [0, 1, 0, 3, 12], after calling your function, nums should be [1, 3, 12, 0, 0].

Note:
You must do this in-place without making a copy of the array.
Minimize the total number of operations.

*/


function move0(arr) {
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] !== 0) continue
        for (let j = i + 1; j < arr.length; j++) {
            if (arr[j] === 0) continue
            let temp = arr[i]
            arr[i] = arr[j]
            arr[j] = temp
        }
    }
    return arr
}

console.log(move0([0, 1, 0, 3, 12]))

