var combinationSum2 = function(candidates, target) {
    let values = candidates.sort((a, b) => a - b);
    console.log(values)
    let ans = [];
    solve(values, 0, [], ans, target);
    return ans;
};

function solve(arr, index, temp, ans, target){
    if(target == 0){
        ans.push([...temp]);
        return;
    }
    for(let i = index; i < arr.length; i++){
        if(i > index && arr[i] == arr[i-1]){
            continue;
        }
        if(target < arr[i]){
            break;
        }
        temp.push(arr[i]);
        solve(arr, i + 1, temp, ans, target-arr[i]);
        temp.pop();
    }
}
console.log(combinationSum2([10,1,2,7,6,1,5], 8))