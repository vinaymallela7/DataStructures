function subArraySum(arr, target){
    let i = 0; let j = 0;
    let sum = 0;
    while(j<arr.length){
        if(sum == target){
            console.log(i, j-1);
            return;
        }
        if(sum > target){
            sum -= arr[i];
            i++;
            continue;
        }
        sum += arr[j];
        j++;
    }
}
subArraySum([1,2,3,4,6], 10);