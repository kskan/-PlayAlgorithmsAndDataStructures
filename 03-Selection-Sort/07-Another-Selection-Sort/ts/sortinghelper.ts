import SelectionSort from "./selectionsort";

export default class SortingHelper {
    private constructor() {}

    /**
     *
     */
    public static isSorted<E>(arr: E[]): boolean {
        for (let i: number = 1; i < arr.length; i++)
            if (arr[i - 1] > arr[i]) 
              return false; 
        return true;
    }
    public static sortTest<E>(sortname: string, arr: E[]): void {
        let startTime: number = new Date().getTime();
        if (sortname === "SelectionSort") SelectionSort.sort(arr);
        if (sortname === "SelectionSort2") SelectionSort.sort2(arr);
        let endTime: number = new Date().getTime();
        let time = (endTime - startTime) / 1000.0;
        if(!SortingHelper.isSorted(arr))
            throw new Error(sortname + " failed");
        console.log("n = " + sortname + ", 100 runs : " + time + "s");
    }
}
