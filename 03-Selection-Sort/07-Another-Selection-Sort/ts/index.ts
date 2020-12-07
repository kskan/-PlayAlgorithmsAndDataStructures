
import ArrayGenerator from "./arraygenerator";
import SortingHelper from "./sortinghelper";
let dataSize:number[] = [10000, 100000];
for(let n of dataSize){
    let arr:number[] = ArrayGenerator.generateRandomArray(n, n);
    SortingHelper.sortTest("SelectionSort2", arr);
}
