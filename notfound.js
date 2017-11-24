const BaseError = require('./base_error');

const defBody = {
    name: 'NotFound',
    code: 404,
    status: 404
};

/**
 * 业务异常
 */
class NotFound extends BaseError {


    constructor(message, errorBody) {
        super(message, Object.assign(defBody, errorBody));
    }
}


module.exports = NotFound;