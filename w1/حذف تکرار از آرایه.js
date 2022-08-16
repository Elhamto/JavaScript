const arr=[3, 'a', 'a', 'a', 2, 3, 'a', 3, 'a', 2, 4, 9, 3]
let arr1=[11, 3, 6, 6, 3, 6,2]




uniqueArray = arr.filter(function(item, pos, self) {
    
    console.log(item);
    console.log( pos);
    
    return self.indexOf(item) == pos;
})
console.log(uniqueArray);