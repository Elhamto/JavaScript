const prompt = require('prompt-sync')();
const fs = require('fs');

function createMenu() {
    
    let n = prompt('Name:')
    let username = prompt('username:')
    let password = prompt('password:')
    let age = prompt('age:')

    const data = `username: ${username},
    password: ${password},
    age: ${age}
    `

    const dir = './resturant/';

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


module.exports = {
    createMenu
}