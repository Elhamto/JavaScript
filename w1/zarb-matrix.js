const ma1 = [
    [ 2,  3], 
    [ 4,  5]
  ]
const ma2 = [
    [ 1,  2,  8],
    [ 6,  -1,  3]
  ]
const ma3= [[],[]];

if(ma1[0].length == ma2.length){
  for (let i = 0; i < ma1.length; i++) {
    for (let j = 0; j < ma2[0].length; j++) {
      let sum=0;
      for (let k = 0; k < ma2.length; k++) {
        sum+=ma1[i][k]*ma2[k][j];
      }

      // ma3[i].splice(j, 0, sum);
      ma3[i].push(sum);
    }
  }
console.log( Math.max.apply(null,ma2));
}
else console.log("matrix zarbpazir nemibashad");





// if(ma1[0].length == ma2.length){
//     for (let i = 0; i < ma1.length; i++) {
//       for (let j = 0; j < ma2[0].length; j++) {
//         let sum=0;
//         for (let k = 0; k < ma2.length; k++) {
//           sum+=ma1[i][k]*ma2[k][j];
//         }
//         // ma3[i].splice(j, 0, sum);
//         ma3[i].push(sum);
//       }
//     }
// console.log(ma3);
// }
// else console.log("matrix zarbpazir nemibashad");