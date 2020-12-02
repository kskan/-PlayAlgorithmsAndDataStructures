"use strict";
let swap=(arr,i,j)=>{
    let t = arr[i];
    arr[i] = arr[j];
    arr[j] = t;
}
export default {
    sort(arr){
        for(let i = 0; i < arr.length; i ++){
          let minIndex = i;
          for(let j=i; j<arr.length ;j++){
              if(arr[j] <arr[minIndex]){
                  minIndex = j;
              }
           }
           swap(arr,i,minIndex);
        }
    }

}