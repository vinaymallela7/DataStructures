function subset(arr, ind, temp, totalSum, sum){
    if(ind == arr.length){
        if(sum == totalSum ){
            console.log(temp);
            return true;
        } 
        return false;
    }
    
    temp.push(arr[ind]);
    sum += arr[ind];
    if(subset(arr, ind+1, temp, totalSum, sum)) return true;
    temp.pop();
    sum -= arr[ind];
    if(subset(arr, ind+1, temp, totalSum, sum)) return true;
    
    return false;
}
let values = [1,2,1];
subset(values, 0, [], 2, 0)