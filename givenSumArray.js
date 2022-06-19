//O(n^2)
function sum(arr, s){
    for(let i = 0; i < arr.length; i++){
        let sum = 0;
        for(let j = i; j < arr.length; j++){
            sum += arr[j];
            if(sum == s){
                return [++i, ++j];
            }
            // if(sum > s){
            //     break;
            // }
        }
    }
}

//O(n) time complexity...
function sum(arr, s, n){
    let l = 0; let r = 0;
    let sum = arr[0];
    while(l < n && r < n){
        if(sum == s){
            return [l+1, r+1];
        }else if(sum < s){
            r++;
            if(r == n-1) return [-1];
            sum +=arr[r];
        }else{
            sum -= arr[l++];
        }
    }
    return [-1];
}
console.log(sum([1,2,3,7,5], 120, 5))