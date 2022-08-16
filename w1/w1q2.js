// برنامه ای بنویسید که المانی با بیشترین تکرار در یک آرایه پیدا کند. به عنوان مثال در آرایه ] 3
// دارای بیشترین تکرار است. 'a' المان ]a', 'a', 'a', 2, 3, 'a', 3, 'a', 2, 4, 9, 3

const arr=[3, 'a', 'a', 'a', 2, 3, 'a', 3, 'a', 2, 4, 9, 3]
const arr2=[1, 3, 6, 6, 2, 6, 2]
const arr1=[1, 3, 5, 6, 2, 7, 9, 1, 3, 5, 6, 2, 7, 9]

/********raveshe 3********/
function countMax(arr) {
    let max = 0;
    let counter = 0;
    let maxElement;
    for (let i=0; i<arr.length; i++) {
        for (let j=i; j<arr.length; j++) {
            if (arr[i] == arr[j]){
                counter++;
            }
            if (max<counter) {
                max=counter; 
                maxElement=arr[i];
            }
        }
        counter=0;
    }
    return(maxElement) ;
}
console.log(countMax(arr1)); 

// /********raveshe 1********/
// function mode(arr){
//     return arr.sort((a,b) =>
//           arr.filter(v => v===a).length - arr.filter(v => v===b).length
//     ).pop();
// }

// console.log(mode(arr));


// /********raveshe 2********/
// const Mode = (myArray) =>
//  myArray.reduce( (a,b,i,arr) =>
//   (arr.filter(v=>v===a).length>=arr.filter(v=>v===b).length?a:b),null)

// console.log(Mode(arr1));
