// چسباندن آرایه کوتاه به آرایه بلند

const arr1=[3, 'a', 'a', 'a', 2, 3, 'a', 3, 'a', 2, 4, 9, 3]
const arr2=[11, 3, 6, 6, 4, 6, 2]

let [short, long] = arr1.length > arr2.length ? [arr2 , arr1] : [arr1 , arr2]

const arr = long.concat(short)
console.log(arr);

// for (let i = 0; i < short.length ; i++) {
//     long.push(short[i])
// }
// console.log(short , long);