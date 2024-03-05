import dotenv from "dotenv";
import { NUMBER } from "sequelize";
dotenv.config()

export const dbConfig={
    HOST:process.env.DB_HOST,
    USER:process.env.DB_USER,
    PASSWORD:process.env.DB_PASS,
    DB:process.env.USER_DB,
    PORT:Number(process.env.DB_PORT),
    dialect:process.env.DB_DIALECT,
    pool:{
        max:100,
        min:0,
        acquire:30000,
        idle:10000
    }


}