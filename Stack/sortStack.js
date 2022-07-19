let values = [20, 12, 25, 5, 8];

function sortStack(stack){
    if(stack.length == 0) return;
    let current = stack.pop();
    sortStack(stack);
    insertElemSorted(stack, current)
}
function insertElemSorted(stack, elm){
    if(stack.length == 0 || stack[stack.length-1] < elm){
        stack.push(elm);
        return;
    }
    let current = stack.pop();
    insertElemSorted(stack, elm);
    stack.push(current);
}

sortStack(values);
console.log(values);