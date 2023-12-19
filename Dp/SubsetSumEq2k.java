// Online Java Compiler
// Use this editor to write, compile and run your Java code online

class SubsetSumEq2k {
    public static void main(String[] args) {
        int[] values = {1, 2, 3, 3};
        int k = 6;
        int[][] dp = new int[values.length + 1][k+1];

        for(int i = 0; i < dp.length; i++){
            for(int j = 0; j < dp[0].length; j++){
                dp[i][j] = -1;
            }
        }
        
        System.out.println(solve(values, k, 0, dp));
    }
    
    public static int solve(int[] arr, int sum, int index, int[][] dp){
        
        if(index == arr.length){
            return sum == 0 ? 1 : 0;
        }
        
        if(dp[index][sum] != -1){
            return dp[index][sum];
        }
        
        if(arr[index] <= sum){
            return dp[index][sum] = solve(arr, sum - arr[index], index + 1, dp) + solve(arr, sum, index + 1, dp);
        }else{
            return dp[index][sum] = solve(arr, sum, index + 1, dp);
        }
    }
    
    // public static int solve(int[] arr, int sum){
        
    //     int[][] dp = new int[arr.length + 1][sum + 1];
        
    //     for(int i = 0; i <= arr.length; i++){
    //         for(int j = 0; j <= sum; j++){
    //             if(i == 0){
    //                 dp[i][j] = 0;
    //             }
    //             if(j == 0){
    //                 dp[i][j] = 1;
    //             }
    //         }
    //     }
        
    //     for(int i = 1; i <= arr.length; i++){
    //         for(int j = 1; j <= sum; j++){
    //             if(arr[i - 1] <= j){
    //                 dp[i][j] = dp[i - 1][j - arr[i - 1]] + dp[i - 1][j];
    //             }else{
    //                 dp[i][j] = dp[i - 1][j];
    //             }
    //         }
    //     }
        
    //     return dp[arr.length][sum];
    // }
}