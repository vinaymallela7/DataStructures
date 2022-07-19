function maxSum(arr){
    let max = -100;
    let sum = 0;
    for(let i = 0; i < arr.length; i++){
        sum += arr[i];
        if(sum < 0){
            sum = 0;
        }
        max = Math.max(max, sum);
    }
    console.log(max);
}

maxSum([-1, -4, 5, 1, -9])