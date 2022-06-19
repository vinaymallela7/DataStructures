let decimals = {
    I : 1,
    V : 5,
    X : 10,
    L : 50,
    C : 100,
    D : 500,
    M : 1000
    
}

function toRoman(str){
    let res = 0;
    for(let i = str.length - 1; i >= 0; i--){
        if(i !== str.length - 1){
            if(decimals[str[i+1]] > decimals[str[i]]){
                res = res - decimals[str[i]];
                continue;
            }
        }
        res += decimals[str[i]];
    }
    console.log(res);
}

toRoman('CMXVI');