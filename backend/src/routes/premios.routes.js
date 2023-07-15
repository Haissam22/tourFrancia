import express from "express";

const router=express.Router();


import { insertPremios,deletePremios,updatePremios,getAll,getOne} from "../controllers/premios.controllers.js";

router.post("/add",insertPremios);
router.delete("/:id",deletePremios);
router.patch("/upd/:id",updatePremios);
router.get("/",getAll);
router.get("/:id",getOne);


export default router;