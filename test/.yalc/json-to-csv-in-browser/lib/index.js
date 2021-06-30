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
//# sourceMappingURL=index.js.map