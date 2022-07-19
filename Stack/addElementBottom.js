function addElemAtBottom(stack, elem){
    if(stack.length == 0){
        stack.push(elem);
        return;
    }
    let current = stack.pop();
    addElemAtBottom(stack, elem);
    stack.push(current);
}
let values = [1, 2, 3];
addElemAtBottom(values, 5);
console.log(values)