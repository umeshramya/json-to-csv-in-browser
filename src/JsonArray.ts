export default class JsonArray{
    private _JsonArray:any[]
    private _csvString!:string;
    private _headers!:string[];

    constructor(JsonArray:any[]){
        this._JsonArray =JsonArray;
       this.setHeaders();
    }

    public convertToCSVstring():string{
        let str:string = this._headers.toString();
            this._JsonArray.forEach(arr=>{
                let line:string=""
                this._headers.forEach(head=>{
                    if(line.length){
                        line=`${line}, ${arr[head] === undefined ? "" : `"${arr[head]}"`}`
                    }else{
                        line=`${arr[head] === undefined ? "" : `"${arr[head]}"`}`
                    }
                    
                })
                str= str + "\n" + line;
            })

        return str;

    }

    private setHeaders(){ 
        this._headers= Object.keys(this._JsonArray[0]).map(key=>key)
    }
}

