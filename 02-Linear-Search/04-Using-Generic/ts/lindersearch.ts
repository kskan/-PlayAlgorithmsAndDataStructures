export default class LinearSearch { 
    private constructor(){}
    /*//////////////////////////////////////////
      js函数中类型并没有限制,不存在泛形
    /////////////////////////////////////////*/
    public static search<E>(data:E[],target:E) : number{
        for(let i = 0; i < data.length; i ++)
            if(data[i] == target)
              return i;
         return -1;
    }
    
}