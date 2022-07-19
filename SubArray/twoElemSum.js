function twoElemSum(arr, target){
    arr.sort((a, b) => a-b);
    let i = 0; let j = arr.length - 1;
    while(i < j){
        let currentSum = arr[i]+arr[j];
        if(currentSum == target){
            console.log(i,j);
            return;
        }
        if(currentSum < target){
            i++;
            continue;
        }
        j--;
    }
    console.log(-1)
}
twoElemSum([4, 5, 2, 3, 10, 20, 7, 12], 13)