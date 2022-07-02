const fs = require('fs');

// let data = "Exactly, this is what i mean!"

// fs.writeFileSync("demo/demo.txt", data);
// fs.readFile("file.txt", (err, data) => {
//     console.log(data.toString());
// });

// fs.mkdirSync('demo');
// fs.unlinkSync('demo/demo.txt');
// fs.rmdirSync('demo');

// let data = fs.readFileSync('file.txt');
// console.log(data[0]);
let rStream = fs.createReadStream('file.txt', 'utf-8');
rStream.on('data', (chunck) => {
    console.log(chunck);
})