//Bubble sort
function bubbleSort(arr){
    for(let i = 0; i < arr.length; i++){
       for(let j = 0; j < arr.length - i - 1; j++){
           if(arr[j] > arr[j+1]){
               let temp = arr[j];
               arr[j] = arr[j+1];
               arr[j+1] = temp;
           }
       }
    }
    console.log(arr);
}
// bubbleSort(values);
function selctionSort(arr){
    for(let i = 0; i < arr.length; i++){
        let min = i;
        for(let j = i; j < arr.length; j++){
            if(arr[j] < arr[min]){
                min = j;
            }
        }
        let temp = arr[i];
        arr[i] = arr[min];
        arr[min] = temp;
    }
    console.log(arr);
}

// selctionSort(values);

function insertionSort(arr){
    for(let i = 1; i < arr.length; i++){
        let current = arr[i];
        let j = i-1;
        while(j >=0 && current < arr[j]){
            arr[j+1] = arr[j];
            j--; 
        }
        arr[j+1] = current;
    }
    console.log(arr);
}
// insertionSort(values);

// function quickSort(arr){
//     if(arr.length <= 1) return arr;
//     let mid = arr[0];
//     let leftArr = []; let rigthArr = [];
//     for(let i = 1; i < arr.length; i++){
//         arr[i] < mid ? leftArr.push(arr[i]) : rigthArr.push(arr[i]);
//     }
//     return [...quickSort(leftArr), mid, ...quickSort(rigthArr)];
// }
function quickSort(arr, l, h){
    if(l < h){
        let mid = partition(arr, l, h);
        quickSort(arr, l, mid-1);
        quickSort(arr, mid+1, h);
    }
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
// let values = [8, 11, 2, 7, 34, 3, 4];
// quickSort(values, 0, values.length - 1);
// console.log(values);

var subsets = function(nums) {
    let result = [[]]
    for(i=0;i<nums.length;i++){
        result.forEach(a=>{
            let newAry = Array.from(a)
            newAry.push(nums[i])
            result.push(newAry)
        })
    }
    return result
};
// var subsets = function(nums) {
//     let result = [];
//     solve(nums, result, [], 0);
    
//     return result;
// };

// function solve(nums, result, [...temp], index){
//     if(index >= nums.length){
//         result.push(temp);
//         return;
//     }
//     solve(nums, result, temp, index+1);
//     let elm = nums[index];
//     temp.push(elm);
//     solve(nums, result, temp, index+1);
// }
// console.log(subsets([1, 2, 3]))

function power(a, b){
    b = Math.floor(b);
    if(b==0) return 1;
    if(b==1) return a;
    let ans;
    if(b%2 == 0){
        ans = power(a, b/2) * power(a, b/2);
    }else{
        ans = a*(power(a, b/2) * power(a, b/2));
    }
    return ans;
}


console.log(power(4, 6))

function rotate(a, k, queries){
    let values = [...a];
    let result = [];
    for(let i = 0; i < a.length; i++){
        values[(i+k)%a.length] = a[i];
    }
    for(let item of queries){
        result.push(values[item])
    }
  console.log(values, result);
}

rotate([1, 2, 3, 4], 2, [0, 2])


function mergeSort(arr, l, h){
    if(l>=h){
        return;
    }
    let mid = Math.floor((l+h)/2);
    mergeSort(arr, l, mid);
    mergeSort(arr, mid+1, h);
    merge(arr, l, h, mid);
}
function merge(arr, l, h, mid){
    let i = l; let j = mid+1;
    let res = [];
    while(i<=mid&&j<=h){
        if(arr[i]< arr[j]){
            res.push(arr[i++]);
        }else{
            res.push(arr[j++]);
        }
    }
    while(i<=mid){
        res.push(arr[i++]);
    }
    while(j<=h){
        res.push(arr[j++]);
    }
    let x = 0;
    for(let i =l; i <= h; i++){
        arr[i] = res[x++];
    }
}

let values = [8, 4, 12, 3, 7, 22, 90];
mergeSort(values, 0, values.length-1);
console.log(values);