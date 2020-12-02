
import  LinearSearch  = require('./lindersearch');
///////main///////
let data: string[] = ["你好","谢谢","非常感谢"];


let res: number = LinearSearch.default.search(data,"你好") ;
console.log(res);

let res2: number = LinearSearch.default.search(data, "十分感谢");
console.log(res2);

////////////////