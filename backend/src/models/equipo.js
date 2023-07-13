import mongoose from "mongoose";

const equipoSchema=mongoose.Schema(
    {
        nombre:{
            Type:String,
            required:true,
            trim:true
        },
        manager:{
            Type:String,
            required:true,
            trim:true
        },
        integrantes:{
            Type:String,
            required:true,
            trim:true
        },
        pais:{
            Type:String,
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