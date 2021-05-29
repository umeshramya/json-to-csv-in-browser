export default class JsonArray{
    private _JsonArray:any[]
    private _csvString!:string;
    private _headers!:string[];

    constructor(JsonArray:any[]){
        this._JsonArray =JsonArray;
    }

    private convertToCSVstring(){
        let str:string = this._headers.toString();
        this._headers.forEach(el=>{
            let line:string;
            this._JsonArray.forEach(it=>{
                if(it[el]){

                    line = `${line},${it[el].replace(",", '","')},`
                }else{
                    line = `${line}, "",`
                }
                
            })

        })

    }

    private setHeaders(){
        Object.keys(this._JsonArray[0]).forEach(key=>{
            this._headers.push(key)
        })
    }
}