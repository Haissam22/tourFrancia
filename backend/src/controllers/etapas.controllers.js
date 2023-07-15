import Etapa from "../models/etapas.js";

const insertEtapa= async (req,res)=>{
    try {
        console.log(req)
        const etapa= new Etapa(req.body);
        const newEtapa=await etapa.save();
        res.json(newEtapa);
    } catch (error) {
       console.log(error)
        res.send(error);
    }
};

const deleteEtapa=async (req,res)=>{
    try {
        await Etapa.deleteOne({_id:req.params.id});
        res.status(204).send();
    } catch (error) {
        res.status(404);
        res.send({error});
    }
}
const updateEtapa=async(req,res)=>{
    try {
        const etapa=await Etapa.findOne({_id:req.params.id});
        if(req.body.numero){
            etapa.numero=req.body.numero;
        }
        if(req.body.participantes){
            etapa.participantes=req.body.participantes;
        }
        if(req.body.ciudad){
            etapa.ciudad=req.body.ciudad;
        }
        if(req.body.km){
            etapa.km=req.body.km;
        }
        console.log(req.boy)
        await etapa.save();
        res.send(etapa);
    } catch (error) {
        res.status(404);
        res.send(error);
        console.log(error)
    }
}
const getAll=async (req,res)=>{
    try {
        const Etapas=await Etapa.find();
        res.json(Etapas);
    } catch (error) {
        res.status(404);
        res.send({error});
    }
}
const getOne= async (req,res)=>{
    try {
        const Etapa=await Etapa.findOne({_id:req.params.id})
        res.json(Etapa);
    } catch (error) {
        res.status(404);
        res.send({error});
    }
}

export {
    insertEtapa,
    deleteEtapa,
    updateEtapa,
    getAll,
    getOne
}