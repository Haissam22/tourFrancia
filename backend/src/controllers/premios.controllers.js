import Premios from "../models/premios.js";

const insertPremios= async (req,res)=>{
    try {
        console.log(req)
        const premios= new Premios(req.body);
        const newPremios=await premios.save();
        res.json(newPremios);
    } catch (error) {
        res.status(404);
        res.send({error});
    }
};

const deletePremios=async (req,res)=>{
    try {
        await Premios.deleteOne({_id:req.params.id});
        res.status(204).send();
    } catch (error) {
        res.status(404);
        res.send({error});
    }
}
const updatePremios=async(req,res)=>{
    try {
        const premios=await Premios.findOne({_id:req.params.id});
        if(req.body.etapa){
            premios.etapa=req.body.etapa;
        }
        if(req.body.descripcion){
            premios.descripcion=req.body.descripcion;
        }
        if(req.body.km){
            premios.km=req.body.km;
        }
       
        await premios.save();
        res.send(Premios);
    } catch (error) {
        res.status(404);
        res.send({error});
    }
}
const getAll=async (req,res)=>{
    try {
        const premios=await Premios.find();
        res.json(premios);
    } catch (error) {
        res.status(404);
        res.send({error});
    }
}
const getOne= async (req,res)=>{
    try {
        const premios=await Premios.findOne({_id:req.params.id})
        res.json(premios);
    } catch (error) {
        res.status(404);
        res.send({error});
    }
}

export {
    insertPremios,
    deletePremios,
    updatePremios,
    getAll,
    getOne
}