let str = ""
const hieght = 4 // 7
const base = 7 //13
let q = base/2
let m = n = q/hieght
for (let j = 0; j < hieght-1; j++) {
    for (let i = 1; i < q; i++) {
        str += " "; 
    }  
    q-=m;
    str += "*";
    if (j==0) {
        str += "\n";        
    }else{
        for (let k = 0; k < Math.floor(n*2); k++) {
            str += " ";    
        } 
        n +=m
        str += "*";
        str += "\n";
    }       
}
for (let i = 0; i < base; i++) {
    str += "*" ;
}
console.log(str);