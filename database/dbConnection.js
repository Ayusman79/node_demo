import { Sequelize } from "sequelize";


 const sequelize=new Sequelize({
        database:'sqlite',
        storage:'./database.sqlite',
        dialect:"sqlite"
    })
 export const dbConnection=()=>{
    sequelize.authenticate()
    .then(()=>{
        console.log("database connected")
    })
    .catch((error)=>{
        console.log("error in db connection")
        next(error)
    })
}

export {sequelize}