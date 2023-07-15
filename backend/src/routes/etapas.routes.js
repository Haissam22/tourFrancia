import express from "express";

const router=express.Router();


import { deleteEtapa, getAll, getOne, insertEtapa, updateEtapa } from "../controllers/etapas.controllers.js";

router.post("/add",insertEtapa);
router.delete("/:id",deleteEtapa);
router.patch("/upd/:id",updateEtapa);
router.get("/",getAll);
router.get("/:id",getOne);


export default router;