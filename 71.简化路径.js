/*
 * @lc app=leetcode.cn id=71 lang=javascript
 *
 * [71] 简化路径
 */

// @lc code=start
/**
 * @param {string} path
 * @return {string}
 */
var simplifyPath = function(path) {
  let stark = []
  path = path.split('/')
  path.forEach(dir => {
    if (!dir) return;
    if (dir === '..') {
      stark.pop()
    }
    else if (dir !== '.') {
      stark.push(dir);
    }
  })
  return `/${stark.join('/')}`
};
// @lc code=end

