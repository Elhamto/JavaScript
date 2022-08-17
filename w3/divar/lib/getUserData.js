import promptSync from 'prompt-sync';
import * as fs from "fs"

const prompt = promptSync()

function getData() {
    let n = prompt('Namat ro Begu: ');
    let username = prompt("Username: ");
    let password = prompt("Password: ");
    let age = prompt("age: ");
    
    const data = `username: ${username},
    password: ${password},
    age: ${age}
    `
    const dir = './user/';
    if(!fs.existsSync(dir)){
        fs.mkdir(dir, (err) => {
            if(err) {
                console.log(err);
                return
            }
            console.log("directory sakhte shod!");
        })
    }
    
    fs.writeFile(`${dir,n}.txt`, data, (err) => {
        if(err) {
            console.log(err);
            return
        }
        console.log("copy shod");
    })
}
export const name = "eli"

export default getData;

// fs.readFile("text.txt", "utf-8", (data, err) => { 
//     if(err) {
//         console.log(err);
//         return
//     }
//     console.log(data);
//  })