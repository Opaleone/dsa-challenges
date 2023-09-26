// Write a function to take a string and return true if it contains valid sets of matching brackets, else return false

const validBrackets = function(str) {
  const stack = [];
  const strNoSpace = str.replaceAll(/\s/g,'')
  const strArr = strNoSpace.split('');

  for (let i = 0; i < strArr.length; i++) {
    switch (strArr[i]) {
      case '(':
        stack.push(')')
        break;
      case '[':
        stack.push(']');
        break;
      case '{':
        stack.push('}');
        break;
      default:
        const close = stack.pop();
        if (strArr[i] !== close) {
          return false;
        }
    }
  }

  return true;
};
