function permutation(str, temp, index){
    if(str.length == 0){
        console.log(temp);
        return;
    }

    for(let i = 0; i < str.length; i++){
        let current = str.charAt(i);
        let newStr = str.substring(0, i) + str.substring(i+1);
        permutation(newStr, temp+current, index + 1);
    }
}
let value = "ABCD";
permutation(value, '', 0);