var minCostClimbingStairs = function(cost) {
    let n = cost.length;
    let ans = Math.min(solve(cost, n-1), solve(cost, n-2));
    return ans;
};
//recurresion woth dp or top down approach
function solve(cost, n, dp=[]){
    if(n == 0) return cost[0];
    if(n == 1) return cost[1];
    if(dp[n]) return dp[n];
    dp[n] = cost[n] + Math.min(solve(cost, n-1, dp), solve(cost, n-2, dp));
    return dp[n];
}

//tabulation or bottom up approach
function solve(cost, n, dp=[]){
    dp[0] = cost[0];
    dp[1] = cost[1];
    for(let i = 2; i <= n; i++){
        dp[i] = cost[i] + Math.min(dp[i-1],dp[i-2]);
    }
    return dp[n];
}

// Input: cost = [1,100,1,1,1,100,1,1,100,1]
// Output: 6
// Explanation: You will start at index 0.
// - Pay 1 and climb two steps to reach index 2.
// - Pay 1 and climb two steps to reach index 4.
// - Pay 1 and climb two steps to reach index 6.
// - Pay 1 and climb one step to reach index 7.
// - Pay 1 and climb two steps to reach index 9.
// - Pay 1 and climb one step to reach the top.
// The total cost is 6.