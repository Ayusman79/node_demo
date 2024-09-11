import { DataTypes } from "sequelize";
import { sequelize } from "../dbConnection.js";

 const User = sequelize.define(
  "User",
  {
    id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      autoIncrement: true,
      primaryKey: true,
    },
    userName: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    email: {
      type: DataTypes.STRING,
      allowNull: false,
    },
  },
  {
    timestamps: true,
    tableName: "users",
  }
);

// sequelize.sync().then(()=>{
//     console.log("User table synced")
// })

export {User}
