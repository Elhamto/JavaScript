// // // ; برنامه ای بنویسید که المان هایی که در یک آرایه دوبار تکرار شده اند بیابد.

// // const arr=[3, 'a', 'a', 'a', 2, 3, 'a', 3, 'a', 2, 4, 9, 3]

// // let arr1=[11, 3, 6, 6, 3, 6,2]


// // // arr.reduce((pre, cur, ind)=>{
// // let indArr =[]
// // // })



// // // function countMax (array, srchElmnt){
// // //     array.reduce((ac, cu)=>{
// // //         let c = (cu === srchElmnt) ? 1: 0;
// // //         console.log(ac, cu, srchElmnt,  c);
// // //         return ac + c
// // //     },0)
// // // }

// // // let counter = countMax (arr,2)
// // // console.log(counter)




// // // let counter=0
// // // for (const i of arr) {  //mohtava
   
// // //     indArr.push(arr.indexOf(i))
// // // }
// // // indArr.sort((a,b) => {return b-a})
// // // for (let i=0; i<indArr.length-1; i++) {  //mohtava
// // //    if (indArr[i]!=indArr[i+1] ) {
// // //     console.log(i)
// // //     console.log(indArr)
// // //     i--
// // //    }
    
// // // }
// // // console.log(indArr)

// function fiboV3(n, cache=[0]) {
//     if (n===1 || n===2) 
//         return 1
//     if(cache[n])
//         return cache[n]
//     cache[n]= fiboV3(n-1, cache) + fiboV3(n-2, cache)
//     return cache[n]
// }
// console.log(fiboV3(7));

let str = ""
const h = 5
const q = 7
// const n = Math.round(Math.sqrt(h**2+(q/2)**2))
// console.log(n);
const n =6
for (let i = 0; i <= n; i++) { 
  for (let j = 0; j <= n - i; j++) {
    str += " ";
  }
  for (let k = 0; k < 2 * i - 1; k++) {
    if(i === 1 || i === n) {
      str += "*";
    }
    else {
      if(k === 0 || k === 2 * i - 2) {
        str += "*";
      }
      else {
        str += " ";
      }
    }
  }
  str += "\n";
}
console.log(str);