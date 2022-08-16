let str = ""
const hieght = 7 // 7
const base = 13 //13
let q = base/2 
let m = n = q/(hieght-2)
for (let j = 0; j < hieght-1; j++) {
    for (let i = 0; i <= q; i+=m) {
        str += " "; 
    }  
    q-= m;
    str += "*";
    if (j==0) {
        str += "\n";        
    }else{
        for (let k = 0; k <=(n*2); k+=m) {
            str += " ";
            console.log(`n is: ${n}, k is: ${k}`);
        } 
        n +=m
        // n*=2
        str += "*";
        str += "\n";
    }       
}
for (let i = 0; i < base; i++) {
    str += "*" ;
}
console.log(str);


// /***mosalase motesavio sagheyn ba vared kardane zel'e(tedade khutute chap)***/
// let edge = Math.floor(Math.sqrt(hieght**2 + (base/2)**2))
// let edge = 5;
// let string = "";

// // External loop
// for (let i = 1; i <= edge; i++) {
//   // printing spaces
//   for (let j = 1; j <= edge - i; j++) {
//     string += " ";
//   }
//   // printing star
//   for (let k = 0; k < 2 * i - 1; k++) {
//     if(i === 1 || i === edge) {
//       string += "*";
//     }
//     else {
//       if(k === 0 || k === 2 * i - 2) {
//         string += "*";
//       }
//       else {
//         string += " ";
//       }
//     }
//   }
//   string += "\n";
// }
// console.log(string);



// /***mosalase motesavio sagheyn ba vared kardane zel'e(tedade khutute chap)***/
// // for(var i=1; i<=edge; i++){
// //     console.log("*".repeat(i)));
// //  }


// for(var i=1; i<=edge; i++){
    
//     if(i === edge) {
//         console.log("*".repeat(i));
//         // string=
//       }
//       else {
//         console.log("*".repeat(i));
//         // string=
//         // if (j == 0 || j == i - 1) {
//         //     string="*".repeat(i)
//         // }
//         // else {
//         //     string=" ".repeat(i)
//         // }
//       }
//  }
// // console.log(string);
     
 



// let n = 5;
// // External loop
// for (let i = 1; i <= n; i++) {
//   // printing spaces
//   for (let j = 1; j <= n - i; j++) {
//     string += " ";
//   }
//   // printing star
//   for (let k = 0; k < 2 * i - 1; k++) {
//     string += "*";
//   }
//   string += "\n";
// }
// console.log(string);

// for(var i=1; i<=n; i++){
//     string=".".repeat(n-i)
//     console.log(string);
//     string="*".repeat(i)
//     console.log(string);
//         // console.log(" ".repeat(n-i) , "*".repeat(i));
//      }

// for (let i = 1; i <= n; i++) {
//   for (let j = 0; j < i; j++) {
//     string += "*";
//   }
//   string += "\n";
// }
// console.log(string);

// Display pyramid of number using JavaScript
function pyramid(n) {
    for (let i = 1; i <= n; i++) {
       let str = ' '.repeat(n - i);
       let str2 = '*'.repeat(i * 2 - 1);
       console.log(str + str2 + str);
    }
 }
 
 pyramid(4);

 