const express=require("express")
const app=express();

const dotenv=require("dotenv")
dotenv.config();

const DB=require("./src/config/db")

import {clerkMiddleware} from "@clerk/express     "
import { serve } from "inngest/express";
import { inngest, functions } from "./src/inngest"


app.use(clerkMiddleware()); //req.auth will be available in the req obj

app.use(express.json());

app.use("/api/inngest", serve({ client: inngest, functions }));



const port=process.env.PORT || 3000;
app.use((req,res,next)=>{
    console.log("App is listening")
    next();
})

app.get("/",(req,res)=>{
     console.log("App is listening")
    res.send("You can do it Myman")
})


const startServer=async()=>{
    try{
        await DB();
        if(process.env.NODE_ENV!=="production"){
            app.listen(port,()=>{
                console.log(`The app is listening on ${port} port`)
            })
        }
    }catch(err){
        console.log("Erro Starting server",err)
    }
}

startServer();

export default app;


// DB().then((res)=>{
//     console.log("Connected to DB")
    
// }).catch((err)=>{
//     console.log("Something went Wrong")
// })


// app.listen(port,()=>{
//         console.log(`The App is listening on ${port} port`)
//     })


    
// app.listen(port,()=>{
   
//     console.log(`The App is listening on ${port} port`
    
//     )
//     console.log(DB())
// })