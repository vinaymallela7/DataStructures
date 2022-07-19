function checkParanthesis(str, ds){
    let openBr = ['{', '(', '['];
    for(let i = 0; i < str.length; i++){
        let ch = str[i];
        if(openBr.includes(ch)){
            ds.push(ch);
        }else{
            let top = ds[ds.length - 1];
            if(!match(top, ch, ds)){
                return false;
            }
        }
    }
    if(ds.length == 0) return true;
    else return false;
}
function match(top, ch, ds){
    if((ch == '}' && top == '{') ||( ch == ')' && top == '(') || (ch == ']' && top == '[')){
        ds.pop()
        return true;
    }
    return false;
}
let value1 = '[{()}]';
let value2 = '[{(}]';

console.log(checkParanthesis(value2, []))