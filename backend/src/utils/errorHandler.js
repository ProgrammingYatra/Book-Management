class errorHandler extends Error{
    constructor(message,statusCode){
        super(message);
        this.statusCode=statusCode;
        Error.captureStackTrace(this,this.constuctore)

    }
}

module.exports=errorHandler;