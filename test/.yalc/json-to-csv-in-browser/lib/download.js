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
//# sourceMappingURL=download.js.map