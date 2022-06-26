function distinctElem(arr, n){
    for(let i = 0; i < arr.length; i++){
        let start = i; let end = i+n;
        if(end >= arr.length){
            return;
        }
        let dist = new Set();
        for(let j = start; j < end; j++){
            dist.add(arr[j]);
        }
        console.log(dist.size)
        dist.clear()
    }
}


//O(n)
function distinctElem(arr, n){
    let map = new Map();
    for(let i = 0; i < n; i++){
        let currentValue = map.get(arr[i]) || 0;
        map.set(arr[i], currentValue + 1);
    }
    console.log(map.size)
    for(let i = n; i < arr.length; i++){
        let currentValue;
        if(map.get(arr[i - n]) == 1){
            map.delete(arr[i - n]);
        }else{
            currentValue = map.get(arr[i - n]);
            map.set(arr[i - n], currentValue - 1);
        }
        currentValue = map.get(arr[i]) || 0;
        map.set( arr[i], currentValue + 1);
        
    console.log(map.size)
    }
}


let values = [1, 2, 2, 1, 3, 1, 1, 3];
distinctElem(values, 4);