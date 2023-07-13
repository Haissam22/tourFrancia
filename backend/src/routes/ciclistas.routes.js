import express from "express";

const router=express.Router();

import { deleteCiclis, getAll, getOne, insertCiclist, updateCiclis } from "../controllers/ciclistas.controllers.js";

router.post("/add",insertCiclist);
router.delete("/:id",deleteCiclis);
router.patch("/upd/:id",updateCiclis);
router.get("/",getAll);
router.get("/:id",getOne);


export default router;