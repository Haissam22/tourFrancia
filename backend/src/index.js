import app from "./app.js"; 

const main =()=>{
    app.listen(app.get("port"));
    console.log(`puerto ${process.env.PORT} activo`);
}
 
main();