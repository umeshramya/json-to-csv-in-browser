export class JsonArray {
  private _JsonArray: any[];
  private _csvString!: string;
  private _headers!: string[];

  constructor(JsonArray: any[]) {
    this._JsonArray = JsonArray;
    this.setHeaders();
  }

  public convertToCSVstring(): string {
    let str: string = this._headers.toString();
    this._JsonArray.forEach((arr) => {
      let line: string = "";
      this._headers.forEach((head) => {
        let val: string = arr[head] == undefined ? "" : arr[head];
        if (typeof val === 'string')
          val = val?val.replace(/"/g, '""'):val;
        if (line.length) {
          line = `${line},"${val}"`;
        } else {
          line = `"${val === undefined ? "" : val}"`;
        }
      });
      str = str + "\n" + line;
    });

    return str;
  }

  private setHeaders() {
    this._headers = Object.keys(this._JsonArray[0]).map((key) => key);
  }
}
