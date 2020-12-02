
import  LinearSearch  = require('./lindersearch');
///////main///////
let data: number[] = [24, 18, 12, 9, 16, 66, 32, 4];


let res: number = LinearSearch.default.search(data,16) ;
console.log(res);

let res2: number = LinearSearch.default.search(data, 666);
console.log(res2);

////////////////