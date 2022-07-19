function expo(n, e){
    let ans = 1;

    while(e > 0){
        if(Math.floor(e%2) != 0){
            ans = ans * n;
        }
       
        n = n*n;
        e = e/2;
    }
    console.log(ans);
}

expo(8, 4);