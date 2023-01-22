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
                var removecoma = "".concat(found).replace(/,/g, "");
                if (found) {
                    line = "".concat(line).concat(removecoma, ",");
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
    };
    return JsonArray;
}());
exports.JsonArray = JsonArray;
//# sourceMappingURL=JsonArray.js.map