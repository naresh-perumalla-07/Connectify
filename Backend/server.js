const express=require("express");

const dotenv=require("dotenv")
dotenv.config();

const app=express();

const port=process.env.PORT || 3000;
app.use((req,res,next)=>{
    console.log("App is listening")
    // next();
})

app.get("/",(req,res)=>{
     console.log("App is listening")
    res.send("You can do it Myman")
})

app.listen(port,()=>{
   
    console.log(`The App is listening on ${port} port`)
})