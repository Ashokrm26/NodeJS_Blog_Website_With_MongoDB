const fs = require('fs');

// const readStream = fs.createReadStream('./docs/blog3.txt'); 1
const readStream = fs.createReadStream('./docs/blog3.txt', {encoding : 'utf8'});

const writeStream = fs.createWriteStream('./docs/blog4.txt');

// readStream.on('data', (chunk) => {
//     console.log("---------------CHUNK----------------");
//     // console.log(chunk.toString()); 1
//     console.log(chunk);

//     writeStream.write("\nNew Chunk\n");
//     writeStream.write(chunk);
// });

//piping
readStream.pipe(writeStream);