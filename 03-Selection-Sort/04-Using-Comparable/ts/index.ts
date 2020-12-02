import SelectionSort from "./selectionsort";
import Student from "./student";

let students: Student[] = [
    new Student("Alice", 98),
    new Student("Bobo", 100),
    new Student("Charles", 66),
];
SelectionSort.sort(students);

console.log(students);
