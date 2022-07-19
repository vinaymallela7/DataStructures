const fs = require('fs');

let data = "Desinfektionsreiniger Cif 2in1 750ml Sprühflasche"

fs.writeFileSync("sample.csv", data);
// fs.readFile("file.txt", (err, data) => {
//     console.log(data.toString());
// });
let a = new Buffer('').toString('u')
// fs.mkdirSync('demo');
// fs.unlinkSync('demo/demo.txt');
// fs.rmdirSync('demo');

// let data = fs.readFileSync('sample.csv', 'utf-8');
// console.log(data);
// let rStream = fs.createReadStream('file.txt', 'utf-8');
// rStream.on('data', (chunck) => {
//     console.log(chunck);
// })