/*
 * @lc app=leetcode.cn id=20 lang=javascript
 *
 * [20] 有效的括号
 */

// @lc code=start
/**
 * @param {string} s
 * @return {boolean}
 */

const brackets = {
  '{': '}',
  '(': ')',
  '[': ']'
};
var isValid = function(s) {
  if (s.length % 2 !== 0) return false;
  let stack = [];
  for (let i = 0; i < s.length; i++) {
    const char = s[i];
    if (isLeft(char)) {
      stack.push(char);
    } else {
      let leftBracket = stack.pop();
      if (!leftBracket || getEndBracket(leftBracket) !== char) return false;
    }
  }
  if (stack.length) return false;
  else return true;
};

function isLeft(char) {
  return char in brackets;
}
function getEndBracket(char) {
  return brackets[char];
}

// @lc code=end
