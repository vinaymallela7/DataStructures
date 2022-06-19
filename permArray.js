function perm(arr, l){
    if(l == arr.length){
        console.log(arr);
        return;
    }

    for(let i = l; i < arr.length; i++){
        swap(arr, i, l);
        perm(arr, l+1);
        swap(arr, i, l);
    }
}

function swap(arr, i, j){
    let temp = arr[i];
    arr[i] = arr[j];
    arr[j] = temp;
}

function permTwo(arr, temp){
    if(arr.length == 0){
        console.log(temp);
        return;
    }

    for(let i = 0; i < arr.length; i++){
        let current = arr[i];
        let newArray = [...temp, current];
        let remArray = [...arr.slice(0, i), ...arr.slice(i+1)];

        permTwo(remArray, newArray);
    }
}

let values = [1, 2, 3];


permTwo(values, []);