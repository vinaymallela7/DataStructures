let arr = [4, 5, 3, 4, 6, 8, 5, 3];
// find two elements which appear once
let xor = 0;
for(let item of arr){
    xor = xor ^ item;
}

xor = xor & -xor;
let num1 = 0; let num2 = 0;

for(let item of arr){
    if((item & xor) > 0){
        num1 = num1 ^ item;
    }else{
        num2 = num2 ^ item;
    }
}
console.log(num1, num2);

