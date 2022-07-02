function fstOccr(arr, key){
    let start = 0; let end = arr.length - 1;
    let ans;
    while(start <= end){
        let mid = Math.floor(start + (end - start) / 2);
        if(arr[mid] == key){
            ans = mid;
            end = mid - 1;
        }else if(arr[mid] < key){
            start = mid + 1;
        }else if(arr[mid] > key){
            end = mid - 1;
        }
    }
    return ans;
}
function lastOccr(arr, key){
    let start = 0; let end = arr.length - 1;
    let ans;
    while(start <= end){
        let mid = Math.floor(start + (end - start) / 2);
        if(arr[mid] == key){
            ans = mid;
            start = mid + 1;
        }else if(arr[mid] < key){
            start = mid + 1;
        }else if(arr[mid] > key){
            end = mid - 1;
        }
    }
    return ans;
}

let arr = [2, 3, 4, 4, 4, 4, 4, 7, 7, 8];
console.log(fstOccr(arr, 4), lastOccr(arr, 4));
console.log(fstOccr(arr, 7), lastOccr(arr, 7));