function toRoman(n){

    let value = '';

    while(n > 0){
        for(let key in integers){
            let co = Math.floor(n / integers[key])
            if(co > 0){
                for(let i = 0; i < co; i++){
                    value += key;
                }
                n = n%integers[key];
                break;
            }
        }
    }
    console.log(value);
}

let integers = {
    M: 1000,
    CM: 900,
    D: 500,
    CD: 400,
    C: 100,
    XC: 90,
    L: 50,
    XL: 40,
    X: 10,
    IX: 9,
    V: 5,
    IV: 4,
    I: 1,
}
toRoman(45)