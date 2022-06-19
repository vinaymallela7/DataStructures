let stalls = [4, 6, 1, 9, 8, 2]

stalls.sort();

let low = stalls[0];
let high = stalls[stalls.length - 1]
let mid = Math.floor((low + high)/2);
let res;
while (low <= high){
    cowsArranged(stalls, mid, ( check) => {
        if(check){
            res = mid;
            low = mid + 1;
        }else{
            high = mid - 1;
        }
        console.log(res);
    });
}
function cowsArranged(stalls, mid) {
    let stall = stalls[0];
    let count = 1;
    stalls.map((data, index) => {
        if((data - stall) == mid){
            count++
        }
        if(count === mid){
            return true;
        }
    })
    return false;
}