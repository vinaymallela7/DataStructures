// Online Java Compiler
// Use this editor to write, compile and run your Java code online
import java.util.*;

class Pair{
    int sum;
    int[] indexes;
    
    Pair(int sum, int[] indexes){
        this.sum = sum;
        this.indexes = indexes;
    }
}

class PariComparator implements Comparator<Pair>{
    
    public int compare(Pair pair1, Pair pair2){
        return Integer.compare(pair2.sum, pair1.sum);
    }
}

class MaximumSumCombination {
    public static void main(String[] args) {
        int[] a = { 1, 4, 2, 3 };
        int[] b = { 2, 5, 1, 6 };
        List<Integer> list = solve(a, b, 4);
        
        System.out.println(list);
    }
    
    public static List<Integer> solve(int[] arr1, int[] arr2, int k){
        
        Queue<Pair> heap = new PriorityQueue<>(new PariComparator());
        List<Integer> list = new ArrayList<>();
        //sort arrays;
        Arrays.sort(arr1);
        Arrays.sort(arr2);
        
        int leftIndex = arr1.length - 1;
        int rightIndex = arr2.length - 1;
        int left = arr1[leftIndex];
        int right = arr2[rightIndex];
        
        Pair pair = new Pair(left + right, new int[]{leftIndex, rightIndex});
        heap.offer(pair);
        
        for(int i = 0; i < k; i++){
            Pair top = heap.poll();
            list.add(top.sum);
            leftIndex = top.indexes[0]; rightIndex = top.indexes[1];
            int combOne = arr1[leftIndex - 1] + arr2[rightIndex];
            int combTwo = arr2[rightIndex - 1] + arr1[leftIndex];
            heap.offer(new Pair(combOne, new int[]{leftIndex - 1, rightIndex}));
            heap.offer(new Pair(combTwo, new int[]{leftIndex, rightIndex - 1}));
        }
        
        return list;
    }
}
