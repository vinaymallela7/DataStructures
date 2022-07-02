var search = function(nums, target) {
    let pivot = getPivot(nums);
    
    if(nums[pivot] <= target && target <= nums[nums.length - 1]){
       return bs(nums, pivot, nums.length - 1, target);
    }else{
       return bs(nums, 0, pivot, target);
    }
};
function getPivot(arr){
    let start = 0; let end = arr.length - 1;
    
    let mid = Math.floor(start + (end - start)/2);
    while(start < end){
        if(arr[mid] >= arr[0]){
            start = mid + 1;
        }else{
            end = mid;
        }
        mid = Math.floor(start + (end - start)/2);
    }
    return start || end;
}
function bs(arr, l, h, key){
    let i = l; let j = h;
    let mid = Math.floor(i + (j - i)/2);
    while(i <= j){
        if(arr[mid] == key) return mid;
        if(arr[mid] < key){
            i = mid+1;
        }else{
            j = mid - 1;
        }
        mid = Math.floor(i + (j - i)/2);
    }
    return -1;
}