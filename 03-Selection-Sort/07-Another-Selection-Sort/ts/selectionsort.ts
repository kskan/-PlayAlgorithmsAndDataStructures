
export default class SelectionSort {
     private constructor() {}
     public static sort<E > ( arr:E[]):void{
        for(let i:number = 0; i < arr.length; i ++){
          let minIndex:number = i;
          for(let j:number=i; j<arr.length ;j++){
              if(arr[j] < arr[minIndex]){
                  minIndex = j;
              }
           }
           this.swap(arr,i,minIndex);
        }
     }
     public static sort2<E > ( arr:E[]):void{
        for(let i:number = arr.length - 1; i >=0 ; i --){
          let maxIndex:number = i;
          for(let j:number=i; j>=0 ;j--){
              if(arr[j] > arr[maxIndex]){
                  maxIndex = j;
              }
           }
           this.swap(arr,i,maxIndex);
        }
     }
     public static swap <E>(arr:E[],i:number,j:number):void{
        let t:E = arr[i];
        arr[i] = arr[j];
        arr[j] = t;
     }
}