function addElemAtBottom(stack, elem){
    if(stack.length == 0){
        stack.push(elem);
        return;
    }
    let current = stack.pop();
    addElemAtMiddle(stack, elem);
    stack.push(current);
}
function addElemAtBottom(stack){
    if(stack.length == 0) return;
    let current = stack.pop();
    reverseStack(stack);
    addElemAtMiddle(stack, current);
}
let values = [1, 2, 7, 3];
reverseStack(values);
console.log(values)