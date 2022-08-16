console.log("Hello World!");
const a =15

for (let i=1;i<=a;i++){
    if(a%i==0){
        console.log(i)
    }
}


let i=1;
while(i<=a){
    if(a%i==0){
        console.log(i)
    }
    i++;
}

for (let i=1;i<=a;i++)
    !(a%i) ? console.log(i) : null; 


for (let i=1;i<=a;i++)
    (a%i) ? null : console.log(i); 

function maghsumha(num){
    const result = []
    for(let i=1; i<= num/2; i++)
        num%i ===0 && result.push(i)
    result.push(num);
    return result;
}