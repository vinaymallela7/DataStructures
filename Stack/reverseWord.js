function reverseWord(str, ds){
    let reverse = '';
    for(let i = 0; i < str.length; i++){
        ds.push(str[i]);
    }
    while(ds.length != 0){
        reverse += ds.pop();
    }
    console.log(reverse)
}

let value = 'vinay';
reverseWord(value, []);