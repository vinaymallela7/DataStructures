function hashFunction(key, size){
    let hashCode = 5;
    for(let i = 0; i < key.length; i++){
        hashCode = (7 * hashCode * key.charCodeAt(i)) % size;
    }
    return hashCode;
}
class HashTable{
    constructor(){
        this.values = new Array(5);
    }
    
    setItem(key, value){
        let index = hashFunction(key, this.values.length);
        if(this.values[index]){
            this.values[index].push([key, value]);
            return;
        }
        this.values[index] = [[key, value]];
    }
    
    getItem(key){
        let index = hashFunction(key, this.values.length);
        return this.values[index].find(item => item[0] === key)[1];
    }
}

let ht = new HashTable();
ht.setItem('name', "vinay");
ht.setItem('city', "mbnr");
ht.setItem('age', 25);
ht.setItem('college', "malla reddy");
console.log(ht.getItem('name'))
console.log(ht.values)