function mergeSort(arr, l, h){
    if(l >= h){
        return;
    }
    
    let mid = Math.floor((l+h)/2);
    mergeSort(arr, l, mid);
    mergeSort(arr, mid+1, h);
    merge(arr, l, h, mid);
    
}

function merge(arr, l, h, mid){
    let i = l; let j = mid + 1;
    let res = [];
    
    while(i <= mid && j <= h){
        if(arr[i] < arr[j]){
            res.push(arr[i]);
            i++;
        }else{
            res.push(arr[j]);
            j++;
        }
    }
    while(i <= mid){
        res.push(arr[i]);
        i++;
    }
    while(j <= h){
        res.push(arr[j]);
        j++;
    }
    let x = 0;
    for(let i = l; i <= h; i++){
        arr[i] = res[x++];
    }
}
let values = [8, 4, 12, 5, 3, 1]
mergeSort(values, 0, values.length - 1);
console.log(values);