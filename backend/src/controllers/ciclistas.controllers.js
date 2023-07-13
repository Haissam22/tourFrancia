import Ciclista from "../models/ciclistas.js";

const insertCiclist= async (req,res)=>{
    try {
        console.log(req)
        const ciclista= new Ciclista(req.body);
        const newCiclista=await ciclista.save();
        res.json(newCiclista);
    } catch (error) {
        res.status(404);
        res.send({error});
    }
};

const deleteCiclis=async (req,res)=>{
    try {
        await Ciclista.deleteOne({_id:req.params.id});
        res.status(204).send();
    } catch (error) {
        res.status(404);
        res.send({error});
    }
}
const updateCiclis=async(req,res)=>{
    try {
        const ciclista=await Ciclista.findOne({_id:req.params.id});
        if(req.body.nombre){
            ciclista.nombre=req.body.nombre;
        }
        if(req.body.edad){
            ciclista.edad=req.body.edad;
        }
        if(req.body.sexo){
            ciclista.sexo=req.body.sexo;
        }
        if(req.body.equipo){
            ciclista.equipo=req.body.equipo;
        }
        if(req.body.etapa){
            ciclista.etapa=req.body.etapa;
        }
        await ciclista.save();
        res.send(ciclista);
    } catch (error) {
        res.status(404);
        res.send({error});
    }
}
const getAll=async (req,res)=>{
    try {
        const ciclitas=await Ciclista.find();
        res.json(ciclitas);
    } catch (error) {
        res.status(404);
        res.send({error});
    }
}
const getOne= async (req,res)=>{
    try {
        const ciclista=await Ciclista.findOne({_id:req.params.id})
        res.json(ciclista);
    } catch (error) {
        res.status(404);
        res.send({error});
    }
}

export {
    insertCiclist,
    deleteCiclis,
    updateCiclis,
    getAll,
    getOne
}