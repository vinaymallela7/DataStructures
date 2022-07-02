function quickSort(arr, l, h){
    if(l >= h){
        return;
    }
    let mid = partition(arr, l, h);
    quickSort(arr, l, mid-1);
    quickSort(arr, mid+1, h);
}
function partition(arr, l, h){
    let i = l; let j = h;
    let pivot = arr[h];

    while(i < j){
        while(arr[i] < pivot){
            i++;
        }
        while(arr[j] > pivot){
            j--;
        }
        if(i < j){
            let temp = arr[i];
            arr[i] = arr[j];
            arr[j] = temp;
        }
    }
    return j;
    
}
//[45, 12, 9, 23, 3, 10, 3]