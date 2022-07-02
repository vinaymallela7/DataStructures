
function getPeek(arr){
    let start = 0; let end = arr.length - 1;
    let mid = Math.floor(start + (end - start)/2);
    while(start < end){
        if(arr[mid] < arr[mid + 1]){
            start = mid + 1;
        }else{
            end = mid;
        }
        mid = Math.floor(start + (end - start)/2);
    }
    return mid;
}
let arr = [3, 4, 6, 12, 8, 7];
console.log(getPeek(arr))