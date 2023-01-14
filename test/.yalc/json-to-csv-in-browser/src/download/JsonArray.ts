export class JsonArray {
  private _JsonArray: any[];
  private _csvString!: string;
  private _headers!: string[];

  constructor(JsonArray: any[]) {
    this._JsonArray = JsonArray;
    this.setHeaders();
  }

  public convertToCSVstring(): string {
    let str: string = `${this._headers.toString()}\n`;
    this._JsonArray.forEach((el: any) => {
      let line = "";
      this._headers.forEach((hl: any) => {
        const found = el[hl];
        if (found) {
          line = `${line}${found},`;
        } else {
          line = `${line},`;
        }
      });

      str = `${str}${line}\n`;
    });

    return str;
  }

  private setHeaders() {
    // this._headers = Object.keys(this._JsonArray[0]).map((key) => key);
    this._headers = [];
    this._JsonArray.forEach((el) => {
      Object.keys(el).forEach((hl) => {
        if (this._headers.indexOf(hl) < 0) {
          this._headers.push(hl);
        }
      });
    });

    console.log(this._headers);
  }
}
