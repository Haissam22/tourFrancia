import mongoose from "mongoose";
const etapasSchema = mongoose.Schema(
    {
        numero:{
            type:String,
            required:true,
            trim:true
        },
        participantes:{
            type:String,
            required:true,
            trim:true
        },
        ciudad:{
            type:String,
            required:true,
            trim:true
        },
        km:{
            type:String,
            required:true,
            trim:true
        }
    },
    {
        timestamps:true
    }
);

const Etapa=mongoose.model("Etapas",etapasSchema);

export default Etapa;