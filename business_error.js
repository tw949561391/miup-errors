const BaseError = require('./base_error');


const defBody = {
    name: 'BusinessError',
    code: 500
};

/**
 * 业务异常
 */
class BusinessError extends BaseError {

    constructor(message, errorBody) {
        super(message, Object.assign(defBody, errorBody));
    }
}


module.exports = BusinessError;