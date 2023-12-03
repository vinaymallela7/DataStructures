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


/*
   

    function powerset(str){
        let len = 1 << str.length;
        
        for(let i = 0; i < len; i++){
            let curr = "";
            for(let j = 0; j < str.length; j++){
                // check char index set or not
                if(i & ( 1 << j)){
                    curr += str[j];
                }
            }
            console.log(curr);
        }
    }

    let value = "abc";
    powerset(value);
*/