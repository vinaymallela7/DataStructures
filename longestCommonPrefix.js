// Broute Force way

function longCommonString(arr){
    let prefix = arr[0];
    for(let item of arr){
        if(item.length < prefix.length){
            prefix = item;
        } 
    }
    let isCommon = false;
    while(!isCommon){
        isCommon = checkPrefix(prefix, arr);
        if(!isCommon){
            prefix = prefix.substring(0, prefix.length - 1);
        }
        if(prefix.length == 0){
            isCommon = true;
        }
    }
    if(prefix.length == 0){
        console.log(-1);
        return;
    }
    console.log(prefix);
}

function checkPrefix(str, arr){
    for(let item of arr){
        if(!item.includes(str)){
            return false;
        };
    }
    return true;
}

// Effiecient way

function longCommonString(arr){
    let prefix = arr[0];
    for(let item of arr){
        while(item.indexOf(prefix) != 0){
            prefix = prefix.substring(0, prefix.length -1);
        }
    }
    console.log(prefix);
}

function longCommonString(arr){
    let prefix = '';
    for(let i = 0; i < arr[0].length; i++){
        let currentChar = arr[0][i];
        for(let j = 0; j < arr.length; j++){
            if(currentChar != aee[j][i]) return prefix;
        }
        prefix += currentChar;
    }
    return prefix;
}

longCommonString(['geeksforgeeks', 'geeks', 'geek',
         'geezer']);