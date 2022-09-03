
function fibo(n) {      //DynamicProgramming
    let f1=1
    let f2=1
    for(let i=1; i<n; i++){
        [f1, f2]=[f2,f1+f2]
        // f1 =  f2;
        // f2= f2+ f1
    }
    return f1
}
console.log(fibo(6));



function fiboV2(n) {
    if (n===1 || n===2) 
        return 1
    return fiboV2(n-1)+ fiboV2(n-2)
}
console.log(fiboV2(7));



function fiboV3(n, cache=[0]) {
    if (n===1 || n===2) 
        return 1
    if(cache[n])
        return cache[n]
    cache[n]= fiboV3(n-1, cache) + fiboV3(n-2, cache)
    return cache[n]
}
console.log(fiboV3(7));