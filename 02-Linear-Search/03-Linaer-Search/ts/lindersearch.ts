export default class LinearSearch { 
    private constructor(){}
    public static search(data:number[],target:number) : number{
        for(let i = 0; i < data.length; i ++)
            if(data[i] == target)
              return i;
         return -1;
    }
    
}