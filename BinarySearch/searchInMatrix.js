// let mat = [
//     [1, 4, 6],
//     [7, 12, 15], 
//     [16, 20, 32]
// ]

// // find an element in the given array which is sorted
// function searchElem(arr, target){
    
//     let row = 0; let col = arr[0].length - 1;

//     while(row < arr.length && col >= 0){
//         if(arr[row][col] == target){
//             return true;
//         }
//         if(arr[row][col] > target){
//             col--;
//         }else{
//             row++;
//         }
//     }

//     return false;
// }

// console.log(searchElem(mat, 20));

console.log(arguments, process.argv);