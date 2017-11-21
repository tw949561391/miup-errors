
class ParamError extends Error{
    constructor(message, code){
        super(message);
        this._code=code;
        this._message = message;
    }
    get message() {
        return this._message;
    }

    set message(value) {
        this._message = value;
    }

    get code() {
        return this._code;
    }

    set code(value) {
        this._code = value;
    }
}



module.exports = ParamError;