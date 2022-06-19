// let assert = require('assert');

// let obj1 = { a : { n: 0 } }
// let obj2 = { a : { n: '0' } }

// assert.fail("Error occurred")

// let buff = Buffer.from("abc");

// let  buff = Buffer.alloc(10, 345, "hex");

// console.log(buff);

// var fs = require('fs');

// let readStream = fs.createWriteStream(`${__dirname}/samplewrite.txt`);

// readStream.write("vinay");

// let writeStream = fs.createReadStream(`${__dirname}/sample.txt`, "utf8");

// writeStream.on('data', (chunck) => {
//     console.log("Data recieved...");
//     console.log(chunck);
// })


// function sub_array_division(arr, d, m){
//     let count = 0;
//     let i;
//     for( i = 0; i <= arr.length - m; i++){
//         let result = 0;
//         for(let j = i; j < i + m; j++){
//             result += arr[j];
//         }
//         if(result === d) count++
//     }
//     if(i >= arr.length - m) return count;
// }

// console.log(sub_array_division([1, 2, 4, 3, 0], 3, 2))



// function sum_pairs(arr, d){
//     let count = 0;
//     let i;
//     let array = arr.sort((a, b) => a-b);
//     for( i = 0; i < array.length; i++){
//         for(let j = i; j > 0; j--){
//             if((array[j]+array[j-1]) % d === 0) count++
//         }
//     }
//     if(i >= array.length) return count;
// }

// console.log(sum_pairs([5, 9, 10, 7, 4], 2))


// function migrated_birds(arr){
//     let rep = 1;
//     let count1 = 1;
//     let i;
//     for(i = 1; i <= 5; i++){
//         let count2 = 0;
//         for(let elm of arr){
//             if(i === elm) count2++
//         }
//         if(i < rep && count1 < count2){
//             rep = i;
//         }
//     }
//     if(i > 5) return rep;
// }

// console.log(migrated_birds([1, 1, 2, 2, 4, 4, 4]))

function socks(n, arr){
    arr.sort((a, b) => a - b);
    let result = 0;
    let sum = 1;
    for(let item = 0; item < arr.length-1; item++){
        if(arr[item] !== arr[item + 1] || item === arr.length -2){
            result = count(result, sum);
            sum = 1;
        }else{
            sum++;
        }
    }
    console.log(result)
}
function count(result, elm){
    return Math.floor(elm/2) + result;
}
socks(7, [1,3,4,3,4,1,2,1,2,2])