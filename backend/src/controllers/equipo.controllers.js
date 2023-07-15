import Equipo from "../models/equipo.js";

const insertEquipo= async (req,res)=>{
    try {
        console.log(req)
        const equipo= new Equipo(req.body);
        const newEquipo=await equipo.save();
        res.json(newEquipo);
    } catch (error) {
        res.status(404);
        res.send({error});
    }
};

const deleteEquipo=async (req,res)=>{
    try {
        await Equipo.deleteOne({_id:req.params.id});
        res.status(204).send();
    } catch (error) {
        res.status(404);
        res.send({error});
    }
}
const updateEquipo=async(req,res)=>{
    try {
        const equipo=await Equipo.findOne({_id:req.params.id});
        if(req.body.nombre){
            equipo.nombre=req.body.nombre;
        }
        if(req.body.manager){
            equipo.manager=req.body.manager;
        }
        if(req.body.integrantes){
            equipo.integrantes=req.body.integrantes;
        }
        if(req.body.pais){
            equipo.pais=req.body.pais;
        }
        if(req.body.telefono){
            equipo.telefono=req.body.telefono;
        }
        await equipo.save();
        console.log(req.body)
        res.send(equipo);
    } catch (error) {
        res.status(404);
        res.send({error});
    }
}
const getAll=async (req,res)=>{
    try {
        const equipos=await Equipo.find();
        res.json(equipos);
    } catch (error) {
        res.status(404);
        res.send({error});
    }
}
const getOne= async (req,res)=>{
    try {
        const equipo=await Equipo.findOne({_id:req.params.id})
        res.json(equipo);
    } catch (error) {
        res.status(404);
        res.send({error});
    }
}

export {
    insertEquipo,
    deleteEquipo,
    updateEquipo,
    getAll,
    getOne
}