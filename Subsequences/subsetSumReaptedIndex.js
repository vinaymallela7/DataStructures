function subsetsSum(arr, index, target, temp){
    if(target == 0){
        console.log(temp);
        return;
    }
    if(index == arr.length){
        return;
    }
    
    if(arr[index] <= target){
        temp.push(arr[index]);
        subsetsSum(arr, index, target-arr[index], temp);
        temp.pop();
    }
    subsetsSum(arr, index+1, target, temp);
}

let values = [1, 2, 3, 4];

subsetsSum(values, 0, 7, []);