function moveZeros(arr){
    
    let track = 0;
    
    for(let i = 0; i < arr.length; i++){
        
        if(arr[i] != 0){
            let temp = arr[i];
            arr[i] = arr[track];
            arr[track++] = temp;
        }
    }
    
    console.log(arr);
}

let nums = [1, 0, 2, 0, 4, 5];
moveZeros(nums);