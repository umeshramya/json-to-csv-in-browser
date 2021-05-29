# json-to-csv-in-browser

This module creats the csv file inside the browser itself 
supply jsonarray it will give back file of csv

```html
    <!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
</head>
<body>
    <h1>Test</h1>
    <button id="btn">Click</button>
</body>
    <script type="module"src="client.js" ></script>

    
</html>

```

```javascript
 import {JsonArray, download} from "./node_modules/json-to-csv-in-browser/lib/index.js"


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

```