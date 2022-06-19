function createHeap(arr, n){
    for(let i = n - 1; i >= 0; i--){
        heapify(arr, n, i);
    }
}
function heapify(arr, n, i){
    let large = i;
    let left = 2*i+1; let right = 2*i+2;
    if(left <= n && arr[left] > arr[large]){
        large = left;
    }
    if(right <= n && arr[right] > arr[large]){
        large = right;
    }
    if(large != i){
        swap(arr, i, large);
        heapify(arr, n, large);
    }
}
function swap(arr, i, j){
    let temp = arr[i];
    arr[i] = arr[j];
    arr[j] = temp;
}
function heapSort(arr){
    for(let i = arr.length - 1; i > 0; i--){
        swap(arr, 0, i);
        heapify(arr, i-1, 0);
    }
}
let values = [23, 12, 5, 2, 20, 30, 30];
createHeap(values, values.length);
heapSort(values);
console.log(values);