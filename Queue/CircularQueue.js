class Queue{
    constructor(){
        this.values = new Array(6).fill(0);
        this.size = 0;
        this.rare = -1;
        this.front = -1;
    }
    
    add(data){
        if(this.isFull()){
            return console.log('array is full');
        }
        if(this.front == -1){
            this.front++
        }
        this.rare = (this.rare + 1) % this.values.length;
        this.values[this.rare] = data;
    }
    remove(){
        if(this.isEmpty()) return "array is empty...";
        let result = this.values[this.front];
        if(this.rare == this.front){
            this.rare = this.front = -1;
            return result;
        }
        this.front = (this.front+1) % this.values.length;
        return result;
    }
    isEmpty(){
        return this.rare == -1 && this.front == -1;
    }
    isFull(){
        return (this.rare + 1) % this.size == this.front;
    }
    peek(){
        if(this.isEmpty()) return "array is empty..."
        return this.values[this.front];
    }
    print(){
        while(!this.isEmpty()){
            console.log(this.peek());
            this.remove();
        }
    }
}

let q = new Queue();
q.add(44);
q.add(33);
q.add(54);
q.add(12);
q.add(63);
q.add(37);
q.remove();
q.add(54);
q.remove();
q.print();
console.log(q.isEmpty());