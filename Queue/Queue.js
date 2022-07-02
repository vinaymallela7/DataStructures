// class Queue{
//     constructor(){
//         this.values = new Array(6).fill(0);
//         this.size = 0;
//         this.rare = -1;
//     }
    
//     add(data){
//         if(this.isFull()){
//             return console.log('array is full');
//         }
//         this.values[this.size++] = data;
//         this.rare++;
//     }
//     remove(){
//         if(this.isEmpty()) return "array is empty...";
//         let result = this.values[0];
//         for(let i = 0; i < this.size-1; i++){
//             this.values[i] = this.values[i+1];
//         }
//         this.size--;
//         this.rare--;
//         return result;
//     }
//     isEmpty(){
//         return this.rare == -1;
//     }
//     isFull(){
//         return this.rare + 1 == this.values.length;
//     }
//     peek(){
//         if(this.isEmpty()) return "array is empty..."
//         return this.values[0];
//     }
//     print(){
//         while(!this.isEmpty()){
//             console.log(this.peek());
//             this.remove();
//         }
//     }
// }

// let q = new Queue();
// q.add(44);
// q.add(33);
// q.remove();
// q.print();
// console.log(q.isEmpty());

// console.log(name);
console.log(demo());
let name = 'vinay';

function demo(){
    return 3;
}