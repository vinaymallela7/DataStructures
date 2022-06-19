let array = [3, 16, 4, 9, 10, 7];
let sorted;
for(let i = 0; i < array.length; i++){
    sorted = true;
    for(let j = 0; j < array.length - i; j++ ){
        if(array[j] < array[j - 1]){
            let temp = array[j];
            array[j] = array[j - 1];
            array[j - 1] = temp;
            sorted = false;
        }
    }
    if(sorted) break;
}
console.log(array);