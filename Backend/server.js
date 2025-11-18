const express = require("express");
const dotenv = require("dotenv");
const DB = require("./src/config/db");
const { clerkMiddleware } = require("@clerk/express");
const { serve } = require("inngest/express"); // destructure serve
const { inngest, functions } = require("./src/config/inngest");
 
 
dotenv.config(); 

const app = express();
app.use(clerkMiddleware());
app.use(express.json());
app.use("/api/inngest", serve({ client: inngest, functions }));

app.get("/", (req, res) => {
  res.send("You can do it Myman 🚀");
});

const port = process.env.PORT || 3000;

const startServer = async () => {
  try {
    await DB();
    if (process.env.NODE_ENV !== "production") {
      app.listen(port, () => {
        console.log(`The app is listening on port ${port}`);
      });
    }
  } catch (err) {
    console.error("Error starting server", err);
  }
};

startServer();
module.exports = app;


DB().then((res)=>{
    console.log("Connected to DB")
    
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
