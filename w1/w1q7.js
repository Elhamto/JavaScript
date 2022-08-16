
const arr=[3, 'a', 'a', 'a', 2, 3, 'a', 3, 'a', 2, 4, 9, 3];
let arr2="";
let arr1=[11, 3, 6, 6, 3, 6,2];


const  rev = function (params) {
   if (params ===null || params ===undefined || params ==='') {
      return("None")   
   }
   else
      return params.reverse()    
}
 console.log(rev(arr2));