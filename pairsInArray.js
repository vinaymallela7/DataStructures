function pairs(arr, key){
    let count = 0;
    let map = {};
    for(let item of arr){
        let value = key - item;
        if(map[value]){
            count += map[value];
        }
        map[item] = map[item] ? map[item]+1:1;
    }
    console.log(count, map);
}
let values = [1, 1, 1, 1];
pairs(values, 2);