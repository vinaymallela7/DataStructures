function solve(n, s, h, e){
    if(n == 0) return;
    solve(n-1, s, e, h);
    console.log(`${s}->${e}`);
    solve(n-1, h, s, e);
}
solve(3, 1, 2, 3);