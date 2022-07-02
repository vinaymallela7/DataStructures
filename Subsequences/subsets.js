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