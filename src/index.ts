import express from "express"
import cors from 'cors'
import dotenv from 'dotenv'
import bodyParser from 'body-parser'
const app=express()
dotenv.config()

app.use(bodyParser.json())
app.use(express.json())





app.listen(`${process.env.PORT}`,()=>{
console.log(`admin is up and listening on port ${process.env.PORT}`)
})