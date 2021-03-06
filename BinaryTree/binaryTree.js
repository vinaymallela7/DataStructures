class Node{
    constructor(data){
        this.data = data;
        this.left = null;
        this.right = null;
    }
}
class BinaryTree{
    constructor(){
        this.index = -1;
        this.queue = [];
    }
    buildTree(nodes){
        this.index++;
        if(nodes[this.index] == -1) return null;
        if(this.index >= nodes.length) return;
        let newNode = new Node(nodes[this.index]);
        newNode.left = this.buildTree(nodes);
        newNode.right = this.buildTree(nodes);
        
        return newNode;
    }
    preOrder(root){
        if(!root) return;
        console.log(root.data);
        this.preOrder(root.left);
        this.preOrder(root.right);
    }
    inOrder(root){
        if(!root) return;
        this.inOrder(root.left);
        console.log(root.data);
        this.inOrder(root.right);
    }
    postOrder(root){
        if(!root) return;
        this.postOrder(root.left);
        this.postOrder(root.right);
        console.log(root.data);
    }
    levelOrder(root){
        this.queue.push(root);
        this.queue.push(null);
        let temp = [];
        while(this.queue.length > 0){
            let current = this.queue.shift();
            if(!current){
                console.log(temp.join(' '));
                temp.length = 0;
                if(this.queue.length == 0){
                    break;
                }else{
                    this.queue.push(null);
                }
            }else{
                temp.push(current.data);
                if(current.left){
                    this.queue.push(current.left);
                }
                if(current.right){
                    this.queue.push(current.right);
                }
            }
        }
    }
    countNodes(root){
        if(!root) return 0;
        let leftCount = this.countNodes(root.left);
        let rightCount = this.countNodes(root.right);
        return leftCount + rightCount + 1;
    }
    leafNodes(root){
        if(!root){
            return;
        }
        this.leafNodes(root.left);
        this.leafNodes(root.right);
        if(!root.left && !root.right){
            console.log(root.data);
        }
    }
    sumOfLeaf(root){
        if(!root){
            return 0;
        }

        if(!root.left && !root.right){
            return root.data;
        }
        let leftSum = this.sumOfLeaf(root.left);
        let rightSum = this.sumOfLeaf(root.right);
        return leftSum + rightSum;
    }
    height(root){
        if(!root) return 0;
        
        let right = this.height(root.right);
        let left = this.height(root.left);
        let myHeight = Math.max(right,left)+1;
        
        return myHeight;
    }
    diaMeter(root){
        if(!root) return 0;
        let dl = this.diaMeter(root.left);
        let dr = this.diaMeter(root.right);
        let droot = (this.height(root.left) + this.height(root.right)+1);
        return Math.max(dl, dr, droot);
    }
    diameter2(root){
        if(!root){
            return {
                myHeight: 0,
                diaMeter: 0
            }
        }
        let dl = this.diameter2(root.left);
        let dr = this.diameter2(root.right);
        let droot = dl.myHeight + dr.myHeight + 1;
        let diaMeter = Math.max(dl.diaMeter, dr.diaMeter, droot);
        let myHeight = Math.max(dl.myHeight, dr.myHeight) + 1;
        return {
            myHeight,
            diaMeter
        }
    }
}
let bt = new BinaryTree();
let values = [1, 2, 4, -1, -1, 5, -1, -1, 3, 6, -1, -1, -1];
let root = bt.buildTree(values);
// bt.levelOrder(root);
console.log(bt.diameter2(root))