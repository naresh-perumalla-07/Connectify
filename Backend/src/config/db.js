const mongoose = require("mongoose");
const dotenv = require("dotenv");
dotenv.config();

const DB = async () => {
  if (!process.env.MONGODB_URL) {
    throw new Error("MONGODB_URL is not defined in .env");
  }
  await mongoose.connect(process.env.MONGODB_URL);
  console.log("DB Connected");
};

module.exports = DB;



// const mongoose=require("mongoose");
// const dotenv=require("dotenv");
// dotenv.config();

//  const DB=async()=>{
//     await mongoose.connect(process.env.MONGODB_URL)
// }


// DB().then((res)=>{
    
// if (!process.env.MONGODB_URL) {
//         throw new Error("MONGO_URL is not defined in .env");
//     }
//     console.log("DB Connected")
// }).catch((err)=>{
//     console.log("Something went wrong",err)
// })

// module.exports=DB