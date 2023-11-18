import mongoose from "mongoose";


export const connectToDB=async ()=>{
    const connection={}
   try {
   if(connection.isConnected)return ;
    const db=await mongoose.connect(process.env.DB_CONNECTION_STRING);
  connection.isConnected=db.connections[0].readyState;
 console.log(db.connection.host);
} catch (error) {
    console.log(error)
    
   }
}