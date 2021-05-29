import {JsonArray, download} from "../lib/index.js"


  let arr = [
    {name : "umesh", age : 53},
    {name : "ramya", age : 38},
    {name : "pradyu", age : 22}
]

console.log("umesh")

let jsonArray = new JsonArray(arr);
let str = jsonArray.convertToCSVstring();
console.log(str);
download("my.csv", str);




