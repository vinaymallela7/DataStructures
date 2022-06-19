class Node{
    constructor(data){
        this.data = data;
        this.left = null;
        this.right = null;
    }
}
class BST{
    constructor(){
        
    }
    insert(root, value){
        
        if(!root){
            root = new Node(value);
            return root;
        }
        if(value < root.data){
            root.left = this.insert(root.left, value);
        }else{
            root.right = this.insert(root.right, value);
        }
        return root;
    }
    inOrder(root){
        if(!root) return;
        this.inOrder(root.left);
        console.log(root.data);
        this.inOrder(root.right);
    }
    delete(root, value){
        if(!root){
            return;
        }
        if(root.data > value){
            root.left = this.delete(root.left, value);
        }
        if(root.data < value){
            root.right = this.delete(root.right, value);
        }
        if(root.data == value){
            if(!root.left && !root.right){
                return null;
            }
            if(!root.left){
                return root.right;
            }
            if(!root.right){
                return root.left;
            }
            let inOrderSucceser = this.getElem(root.right);
            root.data = inOrderSucceser.data;
            root.right = this.delete(root.right, inOrderSucceser.data);
        }
        return root;
    }
    getElem(root){
        while(root.left){
            root = root.left;
        }
        return root;
    }
    rootToLeaf(root, res){
        if(!root) return;
        res.push(root.data)
        this.rootToLeaf(root.left);
        this.rootToLeaf(root.right);
        res.pop();
    }

}
let bst = new BST();
let values = [6, 12, 32, 1, 16, 8, 3, 9, 45];
let root = null;
for(let item of values){
    root = bst.insert(root, item);
}
bst.inOrder(root);
root = bst.delete(root, 32);
bst.inOrder(root);