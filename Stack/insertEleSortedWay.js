let values = [9, 12, 20];

function insertElemSorted(stack, elm){
    if(stack.length == 0 || stack[stack.length-1] < elm){
        stack.push(elm);
        return;
    }
    let current = stack.pop();
    insertElemSorted(stack, elm);
    stack.push(current);
}
insertElemSorted(values, 10);
console.log(values);