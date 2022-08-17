function matrix(n,m) {
        if ((n+m)%2 !== 0) {
            return "isn't even"}
        let maze = [...Array(n)].map(x => Array(m).fill())
        let index1 = 0;
        for (let i = 0; i < n; i = i + 2)
        {
            let index2 = 0;
            if (index1 % 2 == 0)
            {
                for (let j = 0; j < m; j = j + 2)
                {
                    if (index2 % 2 == 0)
                    {
                        maze[i][j] = 1;
                        maze[i][j + 1] = 0;
                    }
                    else
                    {
                        maze[i][j] = 0;
                        maze[i][j + 1] = 1;
                    }
                    if (index2 % 2 == 0)
                    {
                        maze[i + 1][j] =0;
                        maze[i + 1][j + 1] =1;
                    }
                    else
                    {
                        maze[i + 1][j] =1;
                        maze[i + 1][j + 1] =0;
                    }
                    index2++;
                }
            }
            else
            {
                for (let j = 0; j < m; j = j + 2)
                {
                    if (index2 % 2 == 0)
                    {
                        maze[i][j] = 0;
                        maze[i][j + 1] = 1;
                    }
                    else
                    {
                        maze[i][j] = 1;
                        maze[i][j + 1] = 0;
                    }
                    if (index2 % 2 == 0)
                    {
                        maze[i + 1][j] =1;
                        maze[i + 1][j + 1] =0;
                    }
                    else
                    {
                        maze[i + 1][j] =0;
                        maze[i + 1][j + 1] =1;
                    }
                    index2++;
                }
            }
            index1++;
        }
        console.log(maze);
        // for (let i = 0; i < n; i++)
        // {
        //     for (let j = 0; j < m; j++)
        //     {
        //         console.log(maze[i][j] );
        //     }
        //     console.log("\n");
        // }
}
matrix(4,4)
// console.log(pagecode);
// document.write(pagecode);