import fs from 'fs';
// import zlib from 'zlib';

// let readStream = fs.createReadStream('./demo.txt',{
//     highWaterMark: 3,
//     encoding: 'utf-8'
// });
// let writeStream = fs.createWriteStream('./test.txt');

// readStream.on('data', (chunk) => {
//     writeStream.write(chunk,(err) => {
//        if (err)log(err);
//         console.log('data written');
//     });
// });

// readStream.pipe(writeStream);//pipe is a duplex stream

// let readStream = fs.createReadStream('./india.txt');
// let gzip = zlib.createGzip();
// let writeStream = fs.createWriteStream('./file.txt.gz');

// readStream.pipe(gzip).pipe(writeStream);



let readStream = fs.createReadStream("./file.txt",{
    highWaterMark: 2,
    encoding: 'utf-8'
})

readStream.on('data', (chunk) => {
    console.log(chunk);
})