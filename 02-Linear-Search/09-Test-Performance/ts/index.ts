import  LinearSearch  from'./lindersearch';
import  ArrayGenerator from "./arraygenerator";

let dataSize : number[]  =[1000000, 10000000];
for(let n of dataSize){
    let data :number[]= ArrayGenerator.generateOrderedArray(n);
    let startTime:number = new Date().getTime();
    for (let k:number = 0; k < 100; k++)
        LinearSearch.search(data, n);
    let endTime:number = new Date().getTime();   
    let time = (endTime - startTime) / 1000.0;
     console.log("n = " + n + ", 100 runs : " + time + "s");
    
}