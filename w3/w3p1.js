function digit(sum){
    if (sum<10) {
        return sum
    }
    else{
        let arr=[]
        for (let i = 9; i > 0; i--) {
            sum -=i
            arr.unshift(i)
            if (sum<i) {
                arr.unshift(sum)
                break
            }
        }
        const str=arr.join('')
        return str
    }
}
console.log(digit(10));



/******* ba reshte (vali revers nadare) ********/

// let sum= 8
// let str=""
// if (sum<10) {
//     str+= sum
// }
// else{
//     for (let i = 9; i > 0; i--) {
//         sum -=i
//         str+=i
//         if (sum<10) {
//             str+= sum
//             break
//         }
//     }
// }
// console.log(str);