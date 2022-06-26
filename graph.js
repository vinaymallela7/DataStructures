let graph = [
    [0, 1, 1, 1, 0],
    [1, 0, 0, 1, 1],
    [1, 0, 0, 0, 0],
    [1, 1, 0, 0, 0],
    [0, 1, 0, 0, 0]
    ];
let visited = [];
let queue = [];
function bsf(){
    let i = 2;
    queue.push(i);
    visited.push(i);
    
    while(queue.length != 0){
        let current = queue.shift();
        for(let j = 0; j < graph.length; j++){
            if(graph[current][j] == 1 && !visited.includes(j)){
                visited.push(j);
                queue.push(j);
            }
        }
    }
    console.log(visited)
}
function dsf(elm){
    let i = elm;
    visited.push(i);
    console.log(elm);
    for(let j = 0; j < graph.length; j++){
        if(graph[i][j]==1 && !visited.includes(j)){
            dsf(j);
        }
    }
    
}
dsf(4)