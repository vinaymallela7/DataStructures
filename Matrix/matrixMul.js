let a = [[4, 2, 1],[5, 2, 4],[6, 2, 8]];
let b = [[3, 4], [2, 10], [7, 2]];
let c = [];


for(let i = 0; i < a[0].length; i++){
    let arr = [];
    for(let j = 0; j < b[0].length; j++){
        let sum = 0;
        for(let k = 0; k < a.length; k++){
            sum += (a[i][k] * b[k][j]);
        }
        arr.push(sum);
    }
    c.push(arr);
}

console.log(c);