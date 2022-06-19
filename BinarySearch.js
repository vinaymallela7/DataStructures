let array = [ 2, 10, 16, 32, 40, 56, 59];

let target = 90;

let low = 0, high = array.length - 1;
// array = array.sort();

function search(low, high, target, array){
    //  while(low <= high){
    //     if(low > high) return -1;
    //     let mid = (low + high)/2;
    //     if(array[mid] === target) return mid;
    //     if(array[mid] < target){
    //         low = mid + 1;
    //     }else{
    //         high = mid - 1;
    //     }
    // }
    // if(low > high) return -1;

    if(low > high) return -1;
    let mid = Math.floor((low + high)/2);
    if(array[mid] === target) return mid;
    if(array[mid] < target) return search(mid + 1, high, target, array);
    if(array[mid] > target) return search(low, mid-1, target, array);
}

console.log(search(low, high, target, array));