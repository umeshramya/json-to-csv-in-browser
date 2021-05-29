import {JsonArray, download} from "../lib/index.js"

mybtn = document.getElementById("btn").addEventListener("click",()=>{

  let arr = [
    {name : `umesh, bilsgai
    sghg 
    susuus`, age : 53},
    {name : "ramya", age : 38},
    {name : "pradyu", age : 22}
]
  let jsonArray = new JsonArray(arr);
  let str = jsonArray.convertToCSVstring();
  download("my.csv", str);

})





