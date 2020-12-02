export default class  ArrayGenerator {
    private constructor() {}
    public static generateOrderedArray(n:number): number[]{
         let arr:number[] = [];
         for(let i:number = 0; i < n; i ++){
             arr[i] = i;
         }
         return arr;
         
    }
    
    
}