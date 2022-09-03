const isPrime = (num) =>{
    if(num < 2)
        throw "number must be bigger than 2"
    for(let i=2; i<= Math.sqrt(num); i++)
        if(num%i === 0)
            return false
    return true;
} 

console.log(isPrime(2));
console.log(isPrime(7));
console.log(isPrime(5));
console.log(isPrime(12));
console.log(isPrime(9));
