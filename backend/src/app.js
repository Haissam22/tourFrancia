import express from "express";
import dotenv from "dotenv";
import conectarDB from "./config.js";

 const app=express();

 dotenv.config();
const PORT=process.env.PORT;

 conectarDB();
 app.set("port", PORT);
 export default app;