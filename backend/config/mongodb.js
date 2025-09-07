// import mongoose from "mongoose";

// const connectDB=async()=>{

//     mongoose.connection.on('connected',()=> console.log("Database connected"))
//     await mongoose.connect(`${process.env.MONGODB_URI}/I_TRUST_DR.`)


// }
// export default connectDB

import mongoose from "mongoose";

const connectDB = async () => {
  try {
    mongoose.connection.on('connected', () => 
      console.log("Database connected successfully")
    );
    await mongoose.connect(`${process.env.MONGODB_URI}/I_TRUST_DR`);
  } catch (error) {
    console.error("Database connection failed", error);
    process.exit(1);
  }
};

export default connectDB;
