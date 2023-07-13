import express from "express";
import dotenv from "dotenv";
import cors from "cors";
import conectarDB from "./config.js";
import ciclitasRouter from "./routes/ciclistas.routes.js"

const app=express();

dotenv.config();

const corsOption=["GET","POST","PATCH","DELETE"];
app.use(express.json())
app.use(cors(corsOption));
app.use("/ciclista",ciclitasRouter);

const PORT=process.env.PORT;

 conectarDB();
 app.set("port", PORT);
 export default app;
