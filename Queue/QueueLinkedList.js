class Node{
    constructor(data, next = null){
        this.data = data;
        this.next = next;
    }
}
class Queue{
    constructor(){
        this.head = null;
        this.tail = null;
    }
    
    add(data){
        let node = new Node(data);
        if(this.isEmpty()){
            this.head = this.tail = node;
            return;
        }
        this.tail.next = node;
        this.tail = node;
        
    }
    remove(){
        if(this.isEmpty()){
            console.log("Queue is empty...");
            return;
        }
        if(this.head == this.tail){
            this.tail = null
        }
        this.head = this.head.next;
    }
    peek(){
        if(this.isEmpty()){
            console.log("Queue is empty...");
            return;
        }
        console.log(this.head.data);
    }
    isEmpty(){
        return this.head == null && this.tail == null;
    }
    print(){
        let current = this.head;
        while(current){
            console.log(current.data);
            current = current.next
        }
    }
}
let q = new Queue();
q.add(45);
q.add(12);
q.add(67);
q.add(84);
q.remove();
q.peek();
q.print();