import  LinearSearch  from'./lindersearch';

import Student from './student'

let students: Student[] =[new Student("Alice"),
                              new Student("Bobo"),
                              new Student("Charles")];
let bobo :Student= new Student("Bobo");

let res3:number = LinearSearch.search(students, bobo);
console.log(res3)


