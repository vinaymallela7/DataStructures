function ETF(n){
    for(let i = 1; i<=n; i++){
       phi[i] = i;
    }
    for(let i = 2; i<=n; i++){
        if(phi[i] == i){
            phi[i] = i-1;
            for(let j = 2*i; j<=n; j+=i){
                phi[j] = (phi[j]*(i-1))/i;
            }
        }
    }
}
let phi = [0];
ETF(10);
console.log(phi);