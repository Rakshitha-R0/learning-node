import fs from 'fs/promises';
import fs2 from 'fs';

// async function resolvePromises() {
//     try {
//         let data = await fs.readFile("text.txt","utf-8");
//         console.log(data);
//     }catch(err){
//         console.log(err);
//     }
// }


async function resolvePromises(){
   try {
    await fs.appendFile("text.txt",", nice meeting you.");
    console.log(fs2.readFileSync("./text.txt", "utf-8"));
   }catch(err){
    console.log(err);
   }
}

resolvePromises();

// fs.writeFile("./text.txt", "hello").then(() =>{
//     console.log("file written");
// }).catch((err) =>{
//     console.log(err);
// });

// fs.readFile("./text.txt","utf-8").then((data) =>{
//     console.log(data);
// }).catch((err) =>{
//     console.log(err);
// })