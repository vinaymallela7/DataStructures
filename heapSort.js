import { heapify } from "./heapify.js";

let heap = [30, 24, 21, 12, 9, 10, 15, 5]

function insertNode(heap, node){
    heap.push(node);
    console.log(heap);
    let currentIndex = heap.length - 1;
    while(currentIndex >= 0){
        let parentIndex = Math.floor(currentIndex/2);
        if(heap[parentIndex] >= heap[currentIndex]){
            break;
        }
        swap(heap, parentIndex, currentIndex);
        currentIndex = parentIndex;
    }
}
function removeNode(heap, len){
    let heapLength =len;
    swap(heap, 0, heapLength - 1);
    heapLength--;
    for(let i = 0; i < heapLength; i++){
        let left = 2*i+1; let right = 2*i+2;
        if(left >= heapLength || right >= heapLength){
            break;
        }
        if(!heap[left] && !heap[right]){
            break;
        }
        if(heap[left] > heap[i]){
            swap(heap, left, i);
        }
        if(heap[right] > heap[i]){
            swap(heap, right, i);
        }
    }
    // for(let i = 0; i < heapLength; i++){
    //     console.log(heap[i]);
    // }
}
function swap(heap, i, j){
    let temp = heap[i];
    heap[i] = heap[j];
    heap[j] = temp;
}
// insertNode(heap, 30);
// removeNode(heap);
let length = heap.length;
for(let item of heap){
    removeNode(heap, length);
    length--;
}
console.log(heap);