const BaseError=require('./base_error');

const defBody = {
    name: 'ParamError',
    code: 500,
};

/**
 * 业务异常
 */
class ParamError extends BaseError{

    constructor(message, errorBody) {
        super(message, Object.assign(defBody, errorBody));
    }
}


module.exports = ParamError;