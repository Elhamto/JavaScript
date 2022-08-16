// .تابعی بنویسید که یک آرگومان بگیرد و مجموع همه اعداد اول کوچکتر از ورودی اش را برگرداند

const isPrime = (num) =>{
    if(num < 2)
        throw "number must be bigger than 2"
    for(let i=2; i<= Math.sqrt(num); i++)
        if(num%i === 0)
            return false
    return true;
} 

const primeArr=[0];
function sum(input= 1){
    for (let j = 2; j < input; j++) 
        isPrime(j) ? primeArr.push(j) : null;        // if(isPrime(j))
                                                     //     primeArr.push(j);
    // console.log(primeArr)
    return primeArr.reduce((pre, cur)=> {return pre + cur})
}

console.log(sum());


// const primeNumber = (num) =>{
//     if(num < 2)
//         throw "number must be bigger than 2"
//         return true
//     for(let i=2; i<= Math.sqrt(num); i++)
//         if(num%i === 0)
//     return true;
// } 
// console.log(primeNumber())


