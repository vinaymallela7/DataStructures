function removeDups(arr){
    
    let track = 1;
    
    for(let i = 1; i < arr.length; i++){
        
        if(arr[i] != arr[track - 1]){
            arr[track++] = arr[i];
        }
    }
    console.log(arr, track);
}

let values = [1, 2, 2, 3, 4, 4, 4, 5, 5];

removeDups(values);