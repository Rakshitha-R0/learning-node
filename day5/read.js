import fs from 'fs';

let readStream = fs.createReadStream('./india.txt');

readStream.on('data', (chunk) => {
    let data = chunk.toString("utf-8");
    console.log("-----------------------------chunk---------------------------");
    console.log(data);
})



readStream.on("end",() =>{
    console.log("End of file");
})