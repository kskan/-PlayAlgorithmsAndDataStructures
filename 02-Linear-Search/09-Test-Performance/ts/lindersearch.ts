
export default class LinearSearch { 
    private constructor(){}
    public static search<E>(data:E[],target:E) : number{
        for(let i = 0; i < data.length; i ++)
            if(data[i]==target )
              return i;
         return -1;
    }
    
}