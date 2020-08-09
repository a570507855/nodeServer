module.exports =  class Json {
    constructor(flag,msg){
        this._flag = flag;
        this._msg = msg;
    }

    get flag(){
        return this._flag;
    }
    set flag(v){
        this._flag = v;
    }

    get msg(){
        return this._msg;
    }
    set msg(v){
        this._msg = v;
    }

    get tokenId(){
        return this._tokenId;
    }

    set tokenId(v){
        this._tokenId = v;
    }

    toString(){
        return JSON.stringify({flag:this._flag,msg:this._msg,tokenId:this._tokenId});
    }
};
