import Student from "./student";
export default class SelectionSort {
     private constructor() {}
     public static sort<E extends Student> ( arr:E[]):void{
        for(let i:number = 0; i < arr.length; i ++){
          let minIndex:number = i;
          for(let j:number=i; j<arr.length ;j++){
              if(arr[j].compareTo(arr[minIndex])<0){
                  minIndex = j;
              }
           }
           this.swap(arr,i,minIndex);
        }
     }
     public static swap <E>(arr:E[],i:number,j:number):void{
        let t:E = arr[i];
        arr[i] = arr[j];
        arr[j] = t;
     }
}