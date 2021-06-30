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
//# sourceMappingURL=csv.js.map