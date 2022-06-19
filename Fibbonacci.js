
// function getFibbo(n){
//     if( n <= 1) return 1;
//     let n1 = getFibbo(n-1);
//     let n2 = getFibbo(n-2);
//     return n1 + n2;
// }

// console.log(getFibbo(-9));

// 0 1 1 2 3 5 8 13 21 34

// function isEven(n){
//     if(n < 0){
//         n = Math.abs(n);
//     }
//     if(n === 0) return true;
//     if(n === 1) return false;
//     return isEven(n-2);
    
// }

// function expo(n, ex){
//     if(ex <= 1) return n;
//     return n * expo(n, ex-1);
// }
// console.log(expo(9, 3))

// let array = [1, 2, 3, 4, 5, 6, 10];

// function sum(l, h, array){
//     // let l = 0, h = array.length - 1;
//         if(l > h) return 0;
//         if(l==h) return array[l] || array[h];
//         return array[l] + array[h] + sum(l+1, h-1, array);
// }

// console.log(sum(0, array.length -1, array));

// let array = [];
// function range(start, end, array){
//     if(start > end) return array;
//     if(start === end) {
//         array.push(start);
//         return array;
//     };
//     array.push(start);
//     array.push(end);
//     return range(start+1, end - 1, array);
// }
// or
// function range(start, end){
//     if(end - start === 2){
//         return [start + 1];
//     }
//     let array = range(start, end - 1);
//     array.push(end-1);
//     return array;
// }
// let array = [];

// function range(start, end, array){
//     array.push(start+1);
//     if(start == end - 2) return array;
//     return range(start + 1, end, array);
// }
// console.log(range(2, 9, []));

function getGcd(a, b){
   if( !b ) return a;
   return getGcd(b, a%b);
}

console.log(getGcd(6, 9));