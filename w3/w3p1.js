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
console.log("raveshe1: ",digit(10));



/******* ba reshte  ********/
function digits(sum) {
    if (sum<10) {
        return sum
    }
    else{
        let str=""
        for (let i = 9; i > 0; i--) {
            sum -=i
            str+=i
            if (sum<i) {
                str+= sum
                break
            }
        }
        str = [...str].reverse().join("");
        return str
    }
}
console.log("raveshe2: ",digits(10));