var {JsonArray, download, CsvTojson} = require("json-to-csv-in-browser")

let mybtn = document.getElementById("btn").addEventListener("click",()=>{

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


let form = document.getElementById("form")
let fileInput = document.getElementById("file")

fileInput.addEventListener("change", (e)=>{
  e.preventDefault();
  let csv= new CsvTojson( new Blob(e.target.files))
  console.log(csv.getheaders())
  
})

// form.addEventListener("submit",(e)=>{
//   e.preventDefault();
//   let formdata = new FormData(form)
//   formdata.append("files", )
//   console.log(formdata)

//   // let csv = new CsvTojson(new Blob(file))
//   // console.log(csv.getheaders())
  
// })





