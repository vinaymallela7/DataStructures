let vertices = ['A', 'B', 'C', 'D', 'E'];

class Node{
    constructor(data){
        this.data = data;
        this.adjNodes = [];
    }
    connect(node){
        this.adjNodes.push(node);
        node.adjNodes.push(this);
    }
}
class Graph{
    constructor(nodes){
        this.nodes = [...nodes];
    }

}

let nodeA = new Node("A");
let nodeB = new Node("B");
let nodeC = new Node("C");
let nodeD = new Node("D");
let nodeE = new Node("E");
nodeA.connect(nodeB);
nodeA.connect(nodeC);
nodeC.connect(nodeD);
nodeD.connect(nodeA);
nodeE.connect(nodeC);
nodeB.connect(nodeC);
let graph = new Graph([nodeA, nodeB, nodeC, nodeD, nodeE]);
for(let item of graph.nodes){
    console.log(item.data, "-->");
    for(let adj of item.adjNodes){
        console.log(adj.data);
    }
}
function bfs(node){
    let visited = [];
    let queue = [];
    visited.push(node.data);
    queue.push(node);
    while(queue.length != 0){
        let current = queue.shift();
        for(let item of current.adjNodes){
            if(!visited.includes(item.data)){
                visited.push(item.data);
                queue.push(item);
            }
        }
    }
    console.log(visited)
}
function dfs(node){
    let visited = [];
    travarsDfs(node, visited);
    console.log(visited);
}
function travarsDfs(node, visited){
    visited.push(node.data);
    for(let item of node.adjNodes){
        if(!visited.includes(item.data)){
            travarsDfs(item, visited);
        }
    }
}
function printPath(visited, start, end){
    let current = end;
    while(current){
        console.log(current.data);
        current = visited[current.data];
    }
}
function shortestPath(start, end){
    let visited = {};
    let queue = [start];
    visited[start.data] = null;
    while(queue.length != 0){
        let current = queue.shift();
        if(current.data == end.data){
            printPath(visited, start, end);
            return;
        }
        for(let item of current.adjNodes){
            if(!visited.hasOwnProperty(item.data)){
                queue.push(item);
                visited[item.data] = current;
            }
        }
    }
}
bfs(nodeE)
console.log(graph.nodes[1]);