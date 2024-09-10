import express from "express"
import fs from "fs"
import user from "./Routes/userRouter.js";
import { successResponse } from "./response_handler/response.js";
import { errorHandler } from "./middleware/errorHandler.js";


const app = express();
function hy(req,res,next){
   console.log('hy');
    next();
}

app.get('/',hy,(req,res)=>{
    fs.writeFile('newText.txt',"Hy adsdasd",(err)=>{
        if(err)
            console.log(data)
    })
    // res.status(200).send("good morning")
    successResponse(res,"good","message")
})  
// const userRouter=user();
app.use('/user',user);
app.use(errorHandler)
app.listen("3000", () => {
  console.log("server is running at 3000");
});
