let vertices = ['A', 'B', 'C', 'D', 'E'];
let verticesInd = {
    A: 0, B: 1, C: 2, D: 3, E: 4
}
let graph = [
    [0, 1, 0, 1, 0],
    [1, 0, 1, 0, 0],
    [0, 1, 0, 1, 1],
    [1, 0, 1, 0, 1],
    [0, 0, 1, 1, 0],
    ]
function adjNodes(node){
    let connectedNodes = []
    let index = verticesInd[node];
    for(let i = 0; i < graph.length; i++){
        if(graph[index][i] == 1){
            connectedNodes.push(vertices[i]);
        }
    }
    console.log(connectedNodes);
}
function bsf(node){
    let index = verticesInd[node];
    let visited = [index];
    let queue = [index];
    while(queue.length != 0){
        let current = queue.shift();
        for(let i = 0; i < graph.length; i++){
            if(graph[current][i]==1 && !visited.includes(i)){
                visited.push(i);
                queue.push(i);
            }
        }
    }
    for(let item of visited){
        console.log(vertices[item]);
    }
}
function dfs(index, visited){
    visited.push(index);
    for(let i = 0; i < graph.length; i++){
        if(graph[index][i] == 1 && !visited.includes(i)){
            dfs(i, visited);
        }
    }
}
function getdfs(node){
    let visited = [];
    let index = verticesInd[node];
    dfs(index, visited);
    for(let item of visited){
        console.log(vertices[item]);
    }
}
getdfs('B')