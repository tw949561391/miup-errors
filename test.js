const ParamError = require('./index').ParamError;

function say() {
    throw new ParamError("sdasdasdasd", {code: 213,status:500,name:"sss"})
}


try {
    say()
} catch (e) {

    console.error(e)
}
