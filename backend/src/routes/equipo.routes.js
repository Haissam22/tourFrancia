import express from "express";

const router=express.Router();


import { deleteEquipo, getAll, getOne, insertEquipo, updateEquipo } from "../controllers/equipo.controllers.js";

router.post("/add",insertEquipo);
router.delete("/:id",deleteEquipo);
router.patch("/upd/:id",updateEquipo);
router.get("/",getAll);
router.get("/:id",getOne);


export default router;