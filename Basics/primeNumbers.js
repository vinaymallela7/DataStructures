// prime numbers upto given number

function primeNumbers(n){
    let totalNumbers = new Array(n+1).fill(true);
    totalNumbers[0] = false; totalNumbers[1] = false;

    for(let i = 2; i*i <= n; i++){
        // if(!totalNumbers[i]) break;
        for(let j = 2*i; j <= n; j = j+i){
            totalNumbers[j] = false;
        }
    }
    console.log(totalNumbers);
}

primeNumbers(12);