import Student from "./student"
export default class LinearSearch { 
    private constructor(){}
  
    public static search<E extends Student>(data:E[],target:E) : number{
        for(let i = 0; i < data.length; i ++)
            if(data[i].equals(target) )
              return i;
         return -1;
    }
    
    
}