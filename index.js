import express from "express"
import fs from "fs"
import user from "./Routes/userRouter.js";
import { successResponse } from "./response_handler/response.js";
import { errorHandler } from "./middleware/errorHandler.js";
import {dbConnection, sequelize } from "./database/dbConnection.js";


const app = express();
app.use(express.json())
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

dbConnection();
sequelize.sync().then(()=>{
    console.log("tables been synced")
}).catch(err=>{
    console.log(err);
    next(err)
})
app.listen("3000", () => {
  console.log("server is running at 3000");
});