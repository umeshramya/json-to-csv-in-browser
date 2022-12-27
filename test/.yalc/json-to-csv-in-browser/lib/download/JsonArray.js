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
                var val = arr[head] == undefined ? "" : arr[head];
                if (typeof val === 'string')
                    val = val ? val.replace(/"/g, '""') : val;
                if (line.length) {
                    line = "".concat(line, ",\"").concat(val, "\"");
                }
                else {
                    line = "\"".concat(val === undefined ? "" : val, "\"");
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
//# sourceMappingURL=JsonArray.js.map