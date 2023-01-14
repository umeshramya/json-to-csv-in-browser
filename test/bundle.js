(function(){function r(e,n,t){function o(i,f){if(!n[i]){if(!e[i]){var c="function"==typeof require&&require;if(!f&&c)return c(i,!0);if(u)return u(i,!0);var a=new Error("Cannot find module '"+i+"'");throw a.code="MODULE_NOT_FOUND",a}var p=n[i]={exports:{}};e[i][0].call(p.exports,function(r){var n=e[i][1][r];return o(n||r)},p,p.exports,r,e,n,t)}return n[i].exports}for(var u="function"==typeof require&&require,i=0;i<t.length;i++)o(t[i]);return o}return r})()({1:[function(require,module,exports){
var {JsonArray, download, CsvTojson} = require("json-to-csv-in-browser")

let mybtn = document.getElementById("btn").addEventListener("click",()=>{

  let arr = [
    {name : `umesh`, age : 53  , gender:"Male"},
    {name : "ramya", age : 38, gender:"Female"},
    {name : "pradyu", gender:"Male"},
    {class : 5}
    
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






},{"json-to-csv-in-browser":4}],2:[function(require,module,exports){
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.JsonArray = void 0;
var JsonArray = /** @class */ (function () {
    function JsonArray(JsonArray) {
        this._JsonArray = JsonArray;
        this.setHeaders();
    }
    JsonArray.prototype.convertToCSVstring = function () {
        var _this = this;
        var str = "".concat(this._headers.toString(), "\n");
        this._JsonArray.forEach(function (el) {
            var line = "";
            _this._headers.forEach(function (hl) {
                var found = el[hl];
                if (found) {
                    line = "".concat(line).concat(found, ",");
                }
                else {
                    line = "".concat(line, ",");
                }
            });
            str = "".concat(str).concat(line, "\n");
        });
        return str;
    };
    JsonArray.prototype.setHeaders = function () {
        var _this = this;
        // this._headers = Object.keys(this._JsonArray[0]).map((key) => key);
        this._headers = [];
        this._JsonArray.forEach(function (el) {
            Object.keys(el).forEach(function (hl) {
                if (_this._headers.indexOf(hl) < 0) {
                    _this._headers.push(hl);
                }
            });
        });
        console.log(this._headers);
    };
    return JsonArray;
}());
exports.JsonArray = JsonArray;

},{}],3:[function(require,module,exports){
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.download = void 0;
function download(filename, text) {
    var element = document.createElement('a');
    element.setAttribute('href', 'data:text/plain;charset=utf-8,' + encodeURIComponent(text));
    element.setAttribute('download', filename);
    element.style.display = 'none';
    document.body.appendChild(element);
    element.click();
    document.body.removeChild(element);
}
exports.download = download;
// Start file download.
//   download("hello.txt","This is the content of my file :)");

},{}],4:[function(require,module,exports){
"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.CsvTojson = exports.download = exports.JsonArray = void 0;
var JsonArray_1 = require("./download/JsonArray");
Object.defineProperty(exports, "JsonArray", { enumerable: true, get: function () { return JsonArray_1.JsonArray; } });
var download_1 = require("./download/download");
Object.defineProperty(exports, "download", { enumerable: true, get: function () { return download_1.download; } });
var csv_1 = __importDefault(require("./upload/csv"));
exports.CsvTojson = csv_1.default;

},{"./download/JsonArray":2,"./download/download":3,"./upload/csv":5}],5:[function(require,module,exports){
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var CsvTojson = /** @class */ (function () {
    function CsvTojson(_blob) {
        var _this = this;
        this.fileText = "";
        this.headers = [];
        this._blob = _blob;
        var fileredear = new FileReader();
        fileredear.onload = function (e) {
            var _a;
            _this.fileText = (_a = e.target) === null || _a === void 0 ? void 0 : _a.result;
        };
        fileredear.readAsText(this._blob);
        this.setHeaders();
    }
    CsvTojson.prototype.getheaders = function () {
        return this.headers;
    };
    CsvTojson.prototype.setHeaders = function () {
        var ret = [];
        var firstLineIndex = this.fileText.search("\n");
        var headerLine = this.fileText.substring(0, firstLineIndex);
        this.headers = headerLine.split(",");
    };
    return CsvTojson;
}());
exports.default = CsvTojson;

},{}]},{},[1]);
