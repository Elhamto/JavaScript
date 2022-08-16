// ; تابعی بنویسید که دو آرایه را به عنوان ورودی بگیرد و المان های غیرمشترک آن ها را برگرداند.
const arr2=[3, 'a', 'a', 'a', 2, 3, 'a', 3, 'a', 2, 4, 9, 3]
let arr1=[11, 3, 6, 6, 3, 6,2]

const arr=[]
for (let j = 0; j < arr2.length; j++) {
    if(!arr1.includes(arr2[j])){
        arr.push(arr2[j])
    }        
}
// console.log(arr);
for (let j = 0; j < arr1.length; j++) {
    if(!arr2.includes(arr1[j])){
        arr.push(arr1[j])
    }        
}
// console.log(arr);

uniqueArray = arr.filter(function(item, pos, self) { // hazfe tekrari
    return self.indexOf(item) == pos;
})
console.log(uniqueArray);

