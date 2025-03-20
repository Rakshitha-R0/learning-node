let bufferFromString = Buffer.from('Hello');
console.log(bufferFromString); 


let allocatedBuffer = Buffer.alloc(8);
console.log(allocatedBuffer);
allocatedBuffer.write('Hello');
console.log(allocatedBuffer);

