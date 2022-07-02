const ll = require("./LinkedList");
const LinkedList = ll.LinkedList;
const Node = ll.Node;

let l = new LinkedList();
class Stack {
    constructor(){
        this.head = null;
        this.size = 0;
    }

    push(data){
        let node = new Node(data);
        this.size++;
        if(!this.head) {
            this.head = node;
            return;
        }
        let current = this.head;
        this.head = node;
        this.head.next = current;
    }
    pop(){
        if(!this.head) return;
        let current = this.head.next;
        this.head = current;
        
    }
    peak(){
        if(!this.head) return;
        return this.head.data;
    }
}
let s = new Stack();
s.push(200);
s.push(400);
s.push(233);
// s.pop();
l.printList(s);
// console.log(s);
// console.log(s.peak());