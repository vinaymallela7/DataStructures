var climbStairs = function(n) {
    return solve(n, 0);
};
function solve(n, i, dp = []){
    if(i == n) return 1;
    if(i > n) return 0;
    if(dp[i]) return dp[i];
    dp[i] = solve(n, i+1, dp) + solve(n, i+2, dp);
    return dp[i];
}