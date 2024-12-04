import mongoose from "mongoose";
// import dotenv from "dotenv";

// dotenv.config();
const url = "mongodb://0.0.0:27017/shrldb";
// module.exports =mongoose.connect(url).then(()=>{
//     console.warn("connected yayyy");
// }).catch((err)=>{
//     console.warn("not connected",err);
//})
const connDB = async () => {
  try {
    const con = await mongoose.connect(url);
    console.log("Connected successfully to the database");
  } catch (e) {
    console.log("Something went wrong with DB Connection:", e);
  }
};

export { connDB };
