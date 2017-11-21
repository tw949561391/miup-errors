class Notfound extends Error {
    constructor(message, code) {
        super(message);
        this._message = message;
        this._code = code;
        this._status = 404;
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


    get status() {
        return this._status;
    }

    set status(value) {
        this._status = value;
    }
}
module.exports = Notfound;