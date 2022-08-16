// baraye moshahede stack commentha bayad bardashte beshe
// A=[3,2,1]
// B=[]
// C=[]
function hanoi(disk, source, destination, temp) {
    if (disk <= 0)
        return
    hanoi(disk - 1, source, temp, destination);
    console.log(`Move disk ${disk} from ${source} to ${destination}`);
    // destination.push(source.pop())
    hanoi(disk - 1, temp, destination, source);
    // return destination
}

// const tower = hanoi(3,A,C,B);
// console.log(tower);
hanoi(3,"A","C","B");