/*
 * @lc app=leetcode.cn id=15 lang=javascript
 *
 * [15] 三数之和
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var threeSum = function(nums) {
  if (nums.length < 3) return [];
  const target = 0;
  let result = []; // 最终返回的结果
  nums = nums.sort((a,b) => a-b)
  // nums = [ -4, -1, -1, 0, 1, 2 ]
  // 0
  // i => -4
  // left => -1
  // right => 2

  // 1
  // i => -4
  // left => 0
  // right => 2
  
  // 2
  // i => -4
  // left => 1
  // right => 2

  // 3
  // i => -1
  // left => -1
  // right => 2

  // 4
  // i => -1
  // left => 0
  // right => 1
  for (let i = 0; i<nums.length ; i ++) {

    if (nums[i] > target) break // 3个值都大于目标值时 相加不可能等于目标
    if (nums[i] === nums[i - 1]) continue; // 去重
    let left = i + 1;
    let right = nums.length - 1;
   
    while (left < right) {
      const first = nums[i]
      const second = nums[left]  
      const third = nums[right] 
      const sum = first + second + third
      if ( sum ===  target) {
        result.push([first,  second ,third])
        while (left<right && nums[left] == nums[left+1]) left++; // 去重 当下一个left的值与当前相等时，则直接跳过
        while (left<right && nums[right] == nums[right-1]) right--; // 去重 当下一个right的值与当前相等时，则直接跳过
        left++
        right--;
      }
      else if (sum < target) left++;
      else if (sum > target) right--;
    }
  }
  return result;
};
// @lc code=end

