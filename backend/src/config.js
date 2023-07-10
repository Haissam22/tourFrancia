import mongoose from "mongoose";

const connectarDB = async ()=>{
    try {
        const connectionDB= await mongoose.connect(process.env.MONGO_URI,{
            useNewUrlParser:true,
            useUnifiedTopology:true
        }) 
        const url=`CONECTADOR A MOGNODB EN SERVER ${connectionDB.connection.host}- EN PUERTO: ${connectionDB.connection.port}`;
        console.log(url)
    } catch (error) {
        
    }
}
export default connectarDB;