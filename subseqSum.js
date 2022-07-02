// subsets whose sum is k = 2

function powerSet(index, arr, temp, sum){
    
    if(index == arr.length){
        sum == 2 && console.log(temp, sum);
        return;
    }
    
    temp.push(arr[index]);
    sum = sum+ arr[index];
    powerSet(index + 1, arr, temp, sum);
     sum = sum - arr[index];
    temp.pop()
    powerSet(index + 1, arr, temp, sum);
}

powerSet(0, [1, 2, 1], [], 0);