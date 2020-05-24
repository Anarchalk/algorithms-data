const Stack = require('./stacks')

const parenMatch = (str) => {
    str = str.replace(/[^()]/ig,'')
    str = str.split('')
    const stack = new Stack()

    for(let i in str) {
        if(str[i] === '(') stack.push(str[i])
        else {
            if(stack.isEmpty()) return false
            else stack.pop()
        }
    } 
    return stack.isEmpty() ? true : false;
}

console.log(parenMatch('((()))(((())))'))
console.log(parenMatch(')'))