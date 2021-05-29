(function(){function r(e,n,t){function o(i,f){if(!n[i]){if(!e[i]){var c="function"==typeof require&&require;if(!f&&c)return c(i,!0);if(u)return u(i,!0);var a=new Error("Cannot find module '"+i+"'");throw a.code="MODULE_NOT_FOUND",a}var p=n[i]={exports:{}};e[i][0].call(p.exports,function(r){var n=e[i][1][r];return o(n||r)},p,p.exports,r,e,n,t)}return n[i].exports}for(var u="function"==typeof require&&require,i=0;i<t.length;i++)o(t[i]);return o}return r})()({1:[function(require,module,exports){
var {JsonArray, download} = require("json-to-csv-in-browser")

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
        var str = this._headers.toString();
        this._JsonArray.forEach(function (arr) {
            var line = "";
            _this._headers.forEach(function (head) {
                var val = arr[head] === undefined ? "" : arr[head];
                val = val.toString().search(",") >= 0 ? "\"" + val + "\"" : val;
                if (line.length) {
                    line = line + ", " + val;
                }
                else {
                    line = "" + (val === undefined ? "" : val);
                }
            });
            str = str + "\n" + line;
        });
        return str;
    };
    JsonArray.prototype.setHeaders = function () {
        this._headers = Object.keys(this._JsonArray[0]).map(function (key) { return key; });
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
Object.defineProperty(exports, "__esModule", { value: true });
exports.download = exports.JsonArray = void 0;
var JsonArray_1 = require("./JsonArray");
Object.defineProperty(exports, "JsonArray", { enumerable: true, get: function () { return JsonArray_1.JsonArray; } });
var download_1 = require("./download");
Object.defineProperty(exports, "download", { enumerable: true, get: function () { return download_1.download; } });

},{"./JsonArray":2,"./download":3}]},{},[1]);
