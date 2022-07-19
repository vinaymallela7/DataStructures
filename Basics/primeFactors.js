function primeFactors(n){
    // Even case
    while(n%2 == 0){
        console.log(2);
        n/=2;
    }
    
    // Odd case
    for(let i = 3; i <= Math.sqrt(n); i+=2){
        while(n%i == 0){
            console.log(i);
            n/=i;
        }
    }
    // If result is prime > 2;
    if(n > 2) console.log(n);
}

primeFactors(315);