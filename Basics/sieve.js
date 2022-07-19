function primeNumbers(n){
    let i = 1; let j = 1;
    let c = new Array(n).fill(0);
    while(i <= j){
        let cond = i+j+2*i*j;
        while(cond <= n){
            c[cond] = true;
            j++;
            cond = i+j+2*i*j;
        }
        i++;
        cond = (2*i)+(2*i*i);
        if(cond <= n){
            j++;
        }
    }
    console.log(c);
    print(c, n);
}
function print(arr, n){
    console.log(2);
  for(let i = 1; i < arr.length; i++){
      if(arr[i] !== true){
          let value = 2*i+1;
          value <= n && console.log(value);
      }
  }
}

primeNumbers(20);