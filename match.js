const Stack = require('./stacks')

function match (paren){
    paren = paren.replace(/[^()]/ig,'')
    console.log(paren)
    const parenArr = paren.split('')

    let stack = new Stack();
    stack.push(parenArr)


    
}

console.log(match('(1+2)-(7/8))'))
(())


)
)
(
(
--------