function subset(arr, ind, temp, totalSum, sum){
    if(ind == arr.length){
        if(sum == totalSum ){
            // console.log(temp);
            return 1;
        } 
        return 0;
    }
    
    temp.push(arr[ind]);
    sum += arr[ind];
    let take = subset(arr, ind+1, temp, totalSum, sum);
    temp.pop();
    sum -= arr[ind];
    let notTake = subset(arr, ind+1, temp, totalSum, sum);
    
    return take + notTake;
}
let values = [1,2,1];
console.log(subset(values, 0, [], 2, 0));