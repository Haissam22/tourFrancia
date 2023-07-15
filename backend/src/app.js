import express from "express";
import dotenv from "dotenv";
import cors from "cors";
import conectarDB from "./config.js";
import ciclitasRouter from "./routes/ciclistas.routes.js"
import equipoRouter from "./routes/equipo.routes.js"
import etapasRouter from "./routes/etapas.routes.js"
import premioRouter from "./routes/premios.routes.js"
const app=express();

dotenv.config();

const corsOption=["GET","POST","PATCH","DELETE"];
app.use(express.json())
app.use(cors(corsOption));
app.use("/ciclista",ciclitasRouter);
app.use("/equipo",equipoRouter);
app.use("/etapa",etapasRouter);
app.use("/premio",premioRouter)


const PORT=process.env.PORT;

 conectarDB();
 app.set("port", PORT);
 export default app;
