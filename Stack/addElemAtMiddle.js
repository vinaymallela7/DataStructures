function addElemAtMiddle(stack, elem, size){
    if(stack.length == Math.floor(size/2)){
        stack.push(elem);
        return;
    }
    let current = stack.pop();
    addElemAtMiddle(stack, elem, size);
    stack.push(current);
}
let values = [1, 2, 7, 3];
addElemAtMiddle(values, 5, values.length);
console.log(values)