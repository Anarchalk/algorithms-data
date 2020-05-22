// //O(1)
// function isEven(value) {
//     if (value % 2 === 0) {
//         return true;
//     } else {
//         return false;
//     }
// }
// //Polynomial time O(n^k) it has nested loops. it requires 2 level of looping( O(n^2).
// function areYouHere(arr1, arr2) {
//     for (let i = 0; i < arr1.length; i++) {
//         const el1 = arr1[i];
//         for (let j = 0; j < arr2.length; j++) {
//             const el2 = arr2[j];
//             if (el1 === el2) return true;
//         }
//     }
//     return false;
// }

// //Linear time O(n)
// function doubleArrayValues(array) {
//     for (let i = 0; i < array.length; i++) {
//         array[i] *= 2;
//     }
//     return array;
// }

// //Linear time O(n)
// function naiveSearch(array, item) {
//     for (let i = 0; i < array.length; i++) {
//         if (array[i] === item) {
//             return i;
//         }
//     }
// }

// //fibonacci O(1)
// function compute(num) {
//     let result = [];
//     for (let i = 1; i <= num; i++) {

//         if (i === 1) {
//             result.push(0);
//         }
//         else if (i === 2) {
//             result.push(1);
//         }
//         else {
//             result.push(result[i - 2] + result[i - 3]);
//         }
//     }
//     return result;
// }

// console.log(compute(40))

// let counter = 0;
// const limit = 100;
// for(let i = 1; i <= limit; i++) {
//     counter = counter + 1;
//     for(let j = 1; j <= limit; j++) {counter = counter+1}
// }

// console.log(counter)

// //O(log n)
// function efficientSearch(array, item) {
//     let minIndex = 0;
//     let maxIndex = array.length - 1;
//     let currentIndex;
//     let currentElement;

//     while (minIndex <= maxIndex) {
//         currentIndex = Math.floor((minIndex + maxIndex) / 2);
//         currentElement = array[currentIndex];

//         if (currentElement < item) {
//             minIndex = currentIndex + 1;
//         }
//         else if (currentElement > item) {
//             maxIndex = currentIndex - 1;
//         }
//         else {
//             return currentIndex;
//         }
//     }
//     return -1;
// }

// //O(1)
// function findRandomElement(arr) {
//     return arr[Math.floor(Math.random() * arr.length)];
// }

// //Linear O(n)
// function isWhat(n) {
//     let ticks = 0
//     let result
//     if (n < 2 || n % 1 !== 0) {
//         return false;
//     }
//     for (let i = 2; i < n; ++i) {
//         ticks++
//         console.log(ticks)
//         if (n % i === 0) return false;
//     } 
//     console.log(ticks)
//     return true;
    
// }
// console.log(isWhat(1001))