 const express =require("express");
const { MongooseError } = require("mongoose");
const mongoose= require("mongoose");

require("dotenv").config();
const usersrutas=require("./routers/user")

const app=express()

app.use(express.json());
app.use("/appi", usersrutas);



 //rutas//
 app.get("/", (req,res ) =>
 {
    res.send("holaa mundo")
 } )
  
 //conexion a mongo db//
 mongoose.connect(process.env.mongodb_clave).then(()=>console.log("conectado a mongo atlas"))
 .catch(error =>console.error(error));

 const port= 3000;
 app.listen(port ,() =>console.log("servidor listo", port) );
