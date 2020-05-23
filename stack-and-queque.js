const Stack = require('./stacks') 
//const _Node = require('./node')
//import Stack from './stacks'
//console.log(Stack)
console.log('------------')
let stack = new Stack();
//console.log(stack)

//const starTreck = new _Node()
stack.push('starTreck')
stack.push('Kirk')
stack.push('Spock')
stack.push('McCoy')
stack.push('Diana')
stack.pop()
//console.log(stack)
stack.display()
console.log(stack.isEmpty())
// const starTreck {
//     constructor (data, null){
console.log(stack.peek())
//     }
// }



