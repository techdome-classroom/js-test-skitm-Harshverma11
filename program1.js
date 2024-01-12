/**
 * @param {string} s
 * @return {boolean}
 */
    def isValid(s):
    stack = []
    brackets = {')': '(', '}': '{', ']': '['}

    for char in s:
        if char in brackets.values():
            stack.append(char)
        elif char in brackets.keys():
            if not stack or stack.pop() != brackets[char]:
                return False
        else:
            return False

    return not stack


    
};

module.exports = { isValid };


