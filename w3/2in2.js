function matrix(row,col) {
    if ((row+col)%2 !== 0) {
        return "isn't even"
    } else {
        const arr = [...Array(row)].map(x => Array(col).fill())
        // console.log(arr)
        arr[0][0]=1
        // arr[0][1]=0
        // arr[1][0]=0
        // arr[1][1]=1
        // arr[2][0]=1
        // console.log(arr);
        for (let i = 0; i < row; i++) {
            for (let j = 0; j < col; j++) {
                if (arr[i][j]===1 ) {
                    arr[i][j+1]=0
                    arr[i+1][j]=0
                }
                j++
                console.log(j);
                if (arr[i][j]===0 && j==col-1) {
                    arr[i+1][j]=1
                   
                }
            }
            
            
        }
        console.log("ended",arr);
    }
}
matrix(2,2)