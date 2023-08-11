export function areBracketsClosed(str) {
    const stack = [];
    const brackets = {
      '(': ')',
      '{': '}',
      '[': ']',
    };
  
    let bracketsExist = false;
  
    for (const char of str) {
      if (brackets[char] || Object.values(brackets).includes(char)) {
        bracketsExist = true;
        if (brackets[char]) {
          stack.push(char);
        } else if (brackets[stack.pop()] !== char) return 'notClosed';
      }
    }
  
    if (bracketsExist) {
      return stack.length === 0 ? 'closed' : 'notClosed';
    } else {
      return 'absent';
    }
  }
  