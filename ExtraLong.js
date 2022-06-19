function extraLongFactorials(n) {
    // Write your code here
      console.log(fact(n).toString());
}
function fact(n){
    n = BigInt(n);
    if(n==1) return BigInt(1);
    let value = n * fact(n-BigInt(1));
    return BigInt(value);
}