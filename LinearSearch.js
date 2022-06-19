const readLine = require('readline').createInterface({
    input: process.stdin,
    output: process.stdout
})

function getInput(){
    readLine.question("enter", value => {
        return value;
        // readLine.close();
    })    
}

// let array = [7, 8, 2, 13, 10, 32, 20];
// let target = 10;
let size = getInput();
let array = new Array();
for(let i = 0; i< size; i++){
    array[i] = getInput();
}
readLine.close();
console.log(array);
// for(let i = 0; i< array.length; i++){
//     if(array[i] === target){
//         console.log(i); 
//         break;
//     };
// }

// time complexity = O(n)