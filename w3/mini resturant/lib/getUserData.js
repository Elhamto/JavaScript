const prompt = require('prompt-sync')();
const fs = require('fs');

function getData() {
    
    let n = prompt('Name:')
    let username = prompt('username:')
    let password = prompt('password:')
    let age = prompt('age:')

    const data = `username: ${username},
    password: ${password},
    age: ${age}
    `

    const dir = './user/';

    if (!fs.existsSync(dir)){
        fs.mkdir(dir, (err) => {
            if(err) {
                console.log(err);
                return
            }
            console.log("directory sakhte shode");
        });
    }


    fs.writeFile(`${dir}${n}.txt`, data, (err) => { 
        if(err) {
            console.log(err);
            return
        }
        console.log("copy shod");
    })

}

const name = "eli"

module.exports = {
    getData,
    name
}

// fs.readFile("text.txt", "utf-8", (data, err) => { 
//     if(err) {
//         console.log(err);
//         return
//     }
//     console.log(data);
//  })