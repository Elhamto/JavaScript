
function gcd(num1,num2){ 
    const smallest = num1 > num2 ? num2 : num1
    for (let i=smallest; i>0; i--){
        if((num1%i===0) && (num2%i===0))
            return i;
    }
}
console.log(gcd(12,6));

/// raveshe nardebani   
function gcd2(num1,num2){ 
    let min = num1 > num2 ? num2 : num1
    let max = num1 > num2 ? num1 : num1
    
    let= temp= min;
    while (temp>0) {
        temp =max % min
        max = min
        min = temp
    }
    return max
}
console.log2(gcd(12,6));

function gcd22(num1,num2){ 
    let [min, max] = num1 > num2 ? [num2, num1]:[num1 , num1]
    
    while (min>0) {
        
        
    }
    return max
}
console.log22(gcd(12,6));
/*
function maghsumha(num){
    const result = []
    for(let i=1; i<= num/2; i++)
        num%i ===0 && result.push(i)
    result.push(num);
    return result;
}
function bmm(num1,num2){ //man
    arr1=maghsumha(num1);
    arr2=maghsumha(num2);
    if(num1>num2){
        max = arr1;
        min= arr2}
    else {max = arr2;
        min = arr1;}
    for (let i in max){
        for(let j in min)
         if(max[i]==min[j])
            return min[j];
    }
}
*/