function numOfTrailZeros(num){
    let res = 0;
    while(num > 0){
        res = res+Math.floor(num/5);
        num = Math.floor(num/5);
    }
    console.log(res);
}

numOfTrailZeros(25);

//given integer n, find no.of zeros in factorial of n;

// n/5 + n/25 + n/75 + .....;