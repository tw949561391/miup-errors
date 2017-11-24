class BaseError extends Error {

    constructor(message, errorBody) {
        super(message);
        this._body = errorBody || {};
        this._message = message;
    }


    get message() {
        return this._message;
    }

    set message(value) {
        this._message = value;
    }


    get body() {
        return this._body;
    }

    set body(value) {
        this._body = value;
    }

}


module.exports = BaseError;