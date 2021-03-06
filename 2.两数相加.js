/*
 * @lc app=leetcode.cn id=2 lang=javascript
 *
 * [2] 两数相加
 */

// @lc code=start
/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */
// var addTwoNumbers = function(l1, l2) {

//   // 暴力破解方法， 此方法 处理不了大数
//   let l1Num = listNodeToNum(l1)
//   let l2Num = listNodeToNum(l2)

//   return NumTolistNode(l1Num + l2Num)

//   function listNodeToNum (listNode) {
//     let currNum = listNode.val.toString();
//     if (listNode.next) {
//       currNum = listNodeToNum(listNode.next) + currNum
//     }
//     return Number(currNum)
//   }

//   function NumTolistNode (num) {
//     num = num.toString().split('')
//     let result = {}
//     let cacheResult = result;
//     while (num.length > 0) {
//       let charStr = num.pop()
//       cacheResult.val = charStr
//       if (num.length > 0) {
//         cacheResult = cacheResult.next = {}
//       }
//     }
//     return result
//   }
// };
var addTwoNumbers = function(l1, l2) {

  // 一层层相加，将当前层多出来的十位数 记录下来， 然后下一层数据获得总和的时候也带上 上一层的多的余数
  // 最终返回的结果
  // 还能接着优化 ，当一个 l1 or l2 已经没有下一层的时候 ，把 resultCache 的引用地址 指向 剩下的 l1 or l2 可以停止后面无用的 循环
  let result = {
    val: 0
  };
  let resultCache = result
  let spare = 0;
  let lastList
  while (l1 && l2 || lastList) {
    let sum = (l1.val + l2.val + spare)
    spare = 0
    let singleDigit;
    if (sum < 10) {
      singleDigit = sum
    }
    else {
      sum = sum.toString();
      spare = Number(sum[0]);
      singleDigit = Number(sum[1]);
    }
    resultCache.val = singleDigit
    l1 = l1.next
    l2 = l2.next
    if (l1 && !l2) {
      l2 = {
        val: 0
      }
    }
    else if (!l1 && l2) {
      l1 = {
        val: 0
      }
    }
    if (l1 && l2) {
      resultCache = resultCache.next = {
      }
    }
    else if (!l1 && !l2 && spare) {
      resultCache = resultCache.next = {
        val: spare
      }
    }
  }
  return result
};
// @lc code=end

