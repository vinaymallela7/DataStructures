function subsets(arr, index, temp){
    if(index == arr.length){
        console.log(temp);
        return;
    }

    temp.push(arr[index]);
    subsets(arr, index+1, temp);
    temp.pop();
    subsets(arr, index+1, temp);
}

let values = [1, 2, 3];
subsets(values, 0, []);

//or
function subset(arr, index, temp){
    console.log(temp);
    for(let i = index; i < arr.length; i++){
        temp.push(arr[i]);
        subset(arr, i+1, temp);
        temp.pop();
    }
}
subset([1, 2, 3], 0, [])