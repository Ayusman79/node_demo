export const successResponse=(res,data,message,statusCode=200)=>{
    res.status(statusCode).json({sucess: true,message:message, data: data})
}
export const errorResponse=(res,message,statusCode=500)=>{
    res.status(statusCode).json({sucess: false,message:message})
}