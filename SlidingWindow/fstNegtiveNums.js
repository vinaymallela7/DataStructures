function fstNegNumbers(arr, k){
    let start = 0; let queue = [];
    let res = [];
    
    for(let i = 0; i < k; i++){
        if(arr[i] < 0){
            queue.push(arr[i]);
        }
    }
    
    printNegNum(queue,res);
    
    for(let end = k; end < arr.length; end++){
        
        if(arr[end] < 0){
            queue.push(arr[end]);
        }
        if(arr[start] < 0){
            queue.shift();
        }
        start++;
        printNegNum(queue, res);
    }
    
    return res;
}

function printNegNum(queue, res){
    
    if(queue.length){
        res.push(queue[0]);
    }else{
        res.push(0);
    }
}

let values = [2, -1, -3, 7, -5, 8, 4, -2];
console.log(fstNegNumbers(values, 3));