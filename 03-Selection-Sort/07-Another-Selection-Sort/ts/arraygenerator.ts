import * as Random from 'random.ts';
export default class  ArrayGenerator {
    private constructor() {}
    public static generateOrderedArray(n:number): number[]{
         let arr:number[] = [];
         for(let i:number = 0; i < n; i ++){
             arr[i] = i;
         }
         return arr;
    }
     // 生成一个长度为 n 的随机数组，每个数字的范围是 [0, bound)
     public static  generateRandomArray( n:number, bound:number):number[]{
        let arr:number[] = [];
        // Random.ts 模块导入
        for(let i = 0; i < n; i ++)
            arr[i] = Random.number(0,bound);
        return arr;
    }

}