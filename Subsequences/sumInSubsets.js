function subsets(arr, index, temp, target, sum = 0){
    if(index == arr.length){
        sum == target && console.log(temp);
        return;
    }

    temp.push(arr[index]);
    sum += arr[index];
    subsets(arr, index+1, temp, target, sum);
    temp.pop();
    sum -= arr[index];
    subsets(arr, index+1, temp, target, sum);
}

let values = [1, 2, 1];
let target = 2;
subsets(values, 0, [], target);