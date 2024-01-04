function findMedian(arr){
    
    let min = Number.MAX_VALUE;
    let max = Number.MIN_VALUE;
    let row = arr.length;
    let col = arr[0].length;
    
    for(let i = 0; i < row; i++){
        min = Math.min(min, arr[i][0]);
        max = Math.max(max, arr[i][col - 1]);
    }
    
    let value = (row * col) >> 1;
    
    while(min < max){
        
        let mid = (min + max) >> 1;
        let count = 0;
        
        for(let i = 0; i < row; i++){
            count += getCount(arr[i], mid, col);
        }
        
        if(count <= value){
            min = mid + 1;
        }else{
            max = mid;
        }
    }
    
    console.log(min);
}

function getCount(arr, target, n){
    let low = 0; let high = n - 1;
    
    while(low <= high){
        
        let mid = (low + high) >> 1;
        
        if(arr[mid] <= target){
            low = mid + 1;
        }else{
            high = mid - 1;
        }
    }
    
    return low;
}

let arr = [[2, 7, 14], [5, 9, 12], [1, 10, 11]];
findMedian(arr);