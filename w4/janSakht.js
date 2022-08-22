function isPrime(num) {
    if(num < 2)
        return false
    for(let i=2; i<= Math.sqrt(num); i++)
        if(num%i === 0)
            return false
    return true;
}

function janSakht(digit) {
    let janSakht =[]
    for (let num = 2*10**(digit-1); num < 8*10**(digit-1); num++){ 
        if (num === 4*10**(digit-1) || num === 6*10**(digit-1)) { // baraye in k adade kamtari tolid beshe
            num += 10**(digit-1)
            continue
        }
        let prime = num
            for (let index = 1; index < digit; index++) { //khareje ghesmatha aval bashand
                if (!isPrime(prime)) {
                    break
                }
                if (isPrime(prime)&&index==digit-1) {
                    janSakht.push(num)
                }
                prime = Math.floor(prime/10)
            }
    }
    return janSakht
}

console.log(janSakht(2));