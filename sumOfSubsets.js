function sumOfSubsets(arr, temp, index, paths, target){

    let sum = getSum(temp);
    if(sum == target){
        console.log(paths);
        return;
    }
    if(sum > target){
        return;
    }

    if(index == arr.length){
        return;
    }
    sumOfSubsets(arr, [...temp], index + 1, [...paths], target);
    temp.push(arr[index]);
    paths.push(index);
    sumOfSubsets(arr, [...temp], index + 1, [...paths], target);
}
function getSum(arr){
    let sum = 0;
    for(let item of arr){
        sum += item;
    }
    return sum;
}
sumOfSubsets([1, 2, 3, 12, 8], [], 0, [], 20);