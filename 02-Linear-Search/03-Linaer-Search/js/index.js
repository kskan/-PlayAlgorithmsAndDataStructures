"use strict";
import  LinearSearch from "./lindersearch";
///////main///////
var data = [24, 18, 12, 9, 16, 66, 32, 4];
var res = LinearSearch.search(data, 16);
console.log(res);
var res2 = LinearSearch.search(data, 666);
console.log(res2);
