const Stack = require('./stacks')


function is_palindrome(s) {
    s = s.toLowerCase().replace(/[^a-zA-Z0-9]/g, "");
    // Your code goes here
    //console.log(s.split(''))
    let stack = new Stack();

    const strArr = s.split('');
    //console.log(strArr)
    for( let i in strArr) {
       stack.push(strArr[i])

    }

    for(let i in strArr){
     let char = stack.pop() 
     if( char !== strArr[i]){
         return false
     }
    
    }
    return true
   
}

// True, true, true, false
console.log(is_palindrome("dad"));
console.log(is_palindrome("A man, a plan, a canal: Panama"));
console.log(is_palindrome("1001"));
console.log(is_palindrome("Tauhida"));