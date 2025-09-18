const express=require("express");

const dotenv=require("dotenv")
dotenv.config();

const DB=require("./src/config/db")

const app=express();

const port=process.env.PORT || 3000;
app.use((req,res,next)=>{
    console.log("App is listening")
    next();
})

app.get("/",(req,res)=>{
     console.log("App is listening")
    res.send("You can do it Myman")
})




DB().then((res)=>{
    console.log("Connected to DB")
    
}).catch((err)=>{
    console.log("Something went Wrong")
})


app.listen(port,()=>{
        console.log(`The App is listening on ${port} port`)
    })


    
// app.listen(port,()=>{
   
//     console.log(`The App is listening on ${port} port`
    
//     )
//     console.log(DB())
// })