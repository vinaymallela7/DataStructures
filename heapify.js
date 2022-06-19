//    12
//   5 10
// 9 21 15 24
 export const heapify = function(heap){
    for(let i = heap.length-1; i >= 0; i--){
        let left = 2*i+1;
        let right = 2*i+2;
        if(!heap[left] && !heap[right]){
            continue;
        }
        if(heap[left] > heap[i]){
            swap(left, i, heap);
        }
        if(heap[right] > heap[i]){
            swap(right, i, heap);
        }
    }
}
function swap(i, j, heap){
    let temp = heap[i];
    heap[i] = heap[j];
    heap[j] = temp;
}
// let heap = [12, 5, 10, 9, 21, 15, 24]
// heapify(heap);
// console.log(heap);

// module.exports = {
//     heapify
// }

//    24
//   12 21
// 5 9 10 15