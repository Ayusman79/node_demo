import { errorResponse } from "../response_handler/response.js";

export function errorHandler(error,req,res,next){
    const errorCode=error.statusCode||500;
    const message=error.message||"asd";

    errorResponse(res,message,errorCode)
    next()

}