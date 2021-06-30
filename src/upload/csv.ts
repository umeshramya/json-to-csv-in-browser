export default class CsvTojson{
    private _blob:Blob;
    private fileText:string="";
    private headers:string[]=[]


    constructor(_blob:Blob){
        this._blob = _blob;
        let fileredear = new FileReader();
        fileredear.onload= (e)=>{
            this.fileText = e.target?.result as string
        }
        fileredear.readAsText(this._blob)

        this.setHeaders()
    }


    public getheaders():string[]{
        return this.headers
    }

    private setHeaders(){
       let ret:string[]=[];
       let firstLineIndex =  this.fileText.search("\n");
       let headerLine = this.fileText.substring(0, firstLineIndex);
       this.headers = headerLine.split(",")
    }


}