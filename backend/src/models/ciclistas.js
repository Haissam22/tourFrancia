import mongoose from "mongoose";

const CiclistasSchema=mongoose.Schema(
    {
        nombre:{
            type:String,
            required:true,
            trim:true
        },
        edad:{
            type:String,
            required:true,
            trim:true
        },
        sexo:{
            type:String,
            required:true,
            trim:true
        },
        equipo:{
            type:String,
            required:true,
            trim:true
        },
        etapa:{
            type:String,
            required:true,
            trim:true
        }
    },
    {
        timestamps: true
    }
);

const Ciclista= mongoose.model("Ciclista",CiclistasSchema)

export default Ciclista;

