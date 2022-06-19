 class Node {
    constructor(data, next = null){
        this.data = data;
        this.next = next;
    }
}

 class LinkedList {
    constructor(){
        this.head = null;
        this.size = 0;
    }
    
    insertFirst(data){
        this.size++;
        this.head = new Node(data, this.head);
    }
    insertLast(data){
        this.size++;
        if(!this.head){
            this.head = new Node(data);
            return;
        }
        let current = this.head;
        while(current.next){
            current = current.next;
        }
        current.next = new Node(data);
    }
    indexOf(data){
        if(!this.head){
            console.log("List is empty");
            return;
        }
        let index = 0;
        let current = this.head;
        if(!current.next){
            if(current.data === data){
                return index;
            }
        }
        while(current){
            if(current.data === data){
                return index;
            }
            index++;
            current = current.next;
        }
        return "Element not found...";
    }
    deleteFirst(){
        if(!this.head){
            console.log("List is empty");
            return;
        }
        let current = this.head;
        this.head = current.next;
        this.size--;
    }
    deleteLast(){
        if(!this.head){
           console.log("List is empty");
           return;
        }
        let current = this.head;
        let previous;
        if(!current.next){
            this.head = null;
            return;
        }
        while(current.next){
            previous = current;
            current = current.next
        }
        previous.next = null;
    }
    insertAt(data, index){
        let node = new Node(data);
        if(index < 0 || index > this.size) return;
        if(!this.head){
           console.log("List is empty");
           return;
        }
        let current = this.head;
        let previous, count = 0;
        if(index === 0){
            this.insertFirst(data);
            return;
        }
        while(count < index){
            previous = current;
            current = current.next;
            count++;
        }
        previous.next = node;
        node.next = current;
    }
    printList(context = this){
        let current = context.head;
        if(!context.head){
            console.log("List is empty...");
            return;
        }
        while(current){
            console.log(`${current.data}->`);
            current = current.next;
        }
        console.log(`size is ${context.size}`)
    }
    
}
let l = new LinkedList();
l.insertFirst(400);
l.insertFirst(205);
l.insertLast(100);
l.insertFirst(340);
l.insertLast(670);
l.insertLast(620);
l.insertLast(640);
l.insertLast(6370);
l.insertLast(170);
l.insertLast(680);
l.insertLast(270);
l.insertLast(340);
l.insertLast(68);
l.insertFirst(400);
l.insertFirst(205);
l.insertLast(100);
l.insertFirst(340);
l.insertLast(670);
l.insertLast(620);
l.insertLast(640);
l.insertLast(6370);
l.insertLast(170);
l.insertLast(680);
l.insertLast(270);
l.insertLast(340);
l.insertLast(68);
l.insertFirst(400);
l.insertFirst(205);
l.insertLast(100);
l.insertFirst(340);
l.insertLast(670);
l.insertLast(620);
l.insertLast(640);
l.insertLast(6370);
l.insertLast(170);
l.insertLast(680);
l.insertLast(270);
l.insertLast(340);
l.insertLast(68);
// l.printList();
l.insertAt(50,1);
// l.deleteFirst();
l.printList();
// l.deleteLast();
// l.printList();
// console.log(l.indexOf(670))
module.exports = {Node, LinkedList}