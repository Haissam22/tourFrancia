import mongoose from "mongoose";

const premioSchema=mongoose.Schema({
    etapa:{
        type:String,
        required:true,
        trim:true
    },
    descripcion:{
        type:String,
        required:true,
        trim:true
    },
    km:{
        type:String,
        required:true,
        trim:true
    }
});

const Premio=mongoose.model("Premio",premioSchema);

export default Premio;