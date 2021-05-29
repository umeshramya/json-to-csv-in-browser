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
                let val = arr[head] === undefined ? "" : arr[head];
                val = val.toString().search(",") >= 0 ? `"${val}"` : val;
                if (line.length) {
                    line = `${line}, ${val}`;
                }
                else {
                    line = `${val === undefined ? "" : val}`;
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