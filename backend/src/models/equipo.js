import mongoose from "mongoose";

const equipoSchema=mongoose.Schema(
    {
        nombre:{
            type:String,
            required:true,
            trim:true
        },
        manager:{
            type:String,
            required:true,
            trim:true
        },
        integrantes:{
            type:String,
            required:true,
            trim:true
        },
        pais:{
            type:String,
            required:true,
            trim:true
        },
        telefono:{
            type:String,
            required:true,
            trim:true
        }
    },
    {
        timestamps:true
    }
);

const Equipo=mongoose.model("Equipo",equipoSchema);

export default Equipo;