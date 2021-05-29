"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
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
                if (line.length) {
                    line = line + ", " + (arr[head] === undefined ? "" : "\"" + arr[head] + "\"");
                }
                else {
                    line = "" + (arr[head] === undefined ? "" : "\"" + arr[head] + "\"");
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
exports.default = JsonArray;
//# sourceMappingURL=JsonArray.js.map