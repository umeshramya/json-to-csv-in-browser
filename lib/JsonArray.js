export class JsonArray {
    constructor(JsonArray) {
        this._JsonArray = JsonArray;
        this.setHeaders();
    }
    convertToCSVstring() {
        let str = this._headers.toString();
        this._JsonArray.forEach(arr => {
            let line = "";
            this._headers.forEach(head => {
                if (line.length) {
                    line = `${line}, ${arr[head] === undefined ? "" : `"${arr[head]}"`}`;
                }
                else {
                    line = `${arr[head] === undefined ? "" : `"${arr[head]}"`}`;
                }
            });
            str = str + "\n" + line;
        });
        return str;
    }
    setHeaders() {
        this._headers = Object.keys(this._JsonArray[0]).map(key => key);
    }
}
//# sourceMappingURL=JsonArray.js.map