let str = 'abc';
function backTracking(l, r){
     if(l == r){
         console.log(str);
         return;
     }

     for(let i = l; i < str.length; i++){
          swap(i, l);
          backTracking(l+1, r);
          swap(i, l);
     }
}

function swap(i, j){
    let newStr = str.split('');
    let temp = newStr[i];
    newStr[i] = newStr[j];
    newStr[j] = temp;
    str = newStr.join('');
}

backTracking(0, 2);