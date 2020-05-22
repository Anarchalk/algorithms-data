const Memory = require('./memory')
const memory = new Memory()
class Array {
    constructor() {
        this.length = 0;
        this._capacity = 0;
        this.ptr = memory.allocate(this.length);
    }

    push(value) {
                if (this.length >= this._capacity) {
            this._resize((this.length + 1) * Array.SIZE_RATIO);
        }
        
        memory.set(this.ptr + this.length, value);
        this.length++;
    }

    replace(value) {
        if (this.length >= this._capacity) {
            this._resize((this.length + 1) * Array.SIZE_RATIO);
        }
        value = value.replace(/ /g,'%20')
        memory.set(this.ptr + this.length, value);
        this.length++;
    }

    _resize(size) {
        const oldPtr = this.ptr;
        this.ptr = memory.allocate(size);
        if (this.ptr === null) {
            throw new Error('Out of memory');
        }
        memory.copy(this.ptr, oldPtr, this.length);
        memory.free(oldPtr);
        this._capacity = size;
    }
    
    //retreaving values
    get(index) {
      if (index < 0 || index >= this.length) {
        throw new Error('Index error');
      }
      return memory.get(this.ptr + index);
    }
    
    //To pop a value from the end of an array
    pop() {
      if (this.length == 0) {
        throw new Error('Index error');
      }
      const value = memory.get(this.ptr + this.length - 1);
      this.length--;
      return value;
    }
    
    //inserting values
    insert(index, value) {
      if (index < 0 || index >= this.length) {
        throw new Error('Index error');
    }

    if (this.length >= this._capacity) {
        this._resize((this.length + 1) * Array.SIZE_RATIO);
    }

    memory.copy(this.ptr + index + 1, this.ptr + index, this.length - index);
    memory.set(this.ptr + index, value);
    this.length++;
  }
  
  //removing values
  remove(index) {
    if (index < 0 || index >= this.length) {
      throw new Error('Index error');
    }
    memory.copy(this.ptr + index, this.ptr + index + 1, this.length - index - 1);
    this.length--;
  }
}


const main =()=> {
//#6
    const array = [11,2,31,4,5,6,3,8,9,1]
    const newArray = []
    for( let i = 0; i < array.length; i++ ){
         if(array[i] < 5) {
             newArray.push(array[i])
         }
    }
    console.log(newArray)

//#7
    const array =  [4, 6, -3, 5, -2, 1]
    const sum = []
    let num = 0
    for (let i = 0; i < array.length; i++){
            num += array[i] 
            sum.push(num)
     }
        console.log(sum.sort((a,b)=> a-b )[sum.length -1])

//#8
    const array1 = [1, 3, 6, 8, 11]
    const array2 = [2, 3, 5, 8, 9, 10]
    const newArray = []
    let count1 = 0
    let count2 = 0
    
    for (let i = 0; i < array2.length + array1.length; i++) {
        if ( array2[count1] <  array1[count2] ) {
            newArray.push(array2[count1])
            count1++
         }else {
            newArray.push(array1[count2])
            count2++
        }
    }
    console.log(newArray)

//#9
const strVowels = 'Battle of the Vowels: Hawaii vs. Grozny'
const str= 'aeiou'
console.log(strVowels.replace(/[aeiou]/ig, ''))
 
//10
const arr = [1, 3, 9, 4]
const res = []
let prod = 1
for (let i in arr) {
    for (let j in arr) {
        if(i!==j) {
            prod *= arr[j]
            console.log(arr[j])
        }
    }
    res.push(prod)
    prod = 1
    console.log('---------------------')
}
console.log(res)


    //array.push('Hello World')
    // / /g is a pattern matcher. regular expression.
    //array.push('Hello World'.replace(/ /g,'%20'))
    //console.log(array)
//     Array.SIZE_RATIO = 3;
//     const array = new Array();
//     array.replace('tauhida parveen')
// array.push(3)
// array.push(5);
// array.push(15);
// array.push(19);
// array.push(45);
// array.push(10);
// //console.log(array)

// array.pop();
// //   array.pop();
// //   array.pop();
// //   console.log(array.get(0))

// array.push(1);
// console.log(array.get(0))
}

main()

