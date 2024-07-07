import mongoose from "mongoose";

export const  connectDB = async () =>{

    await mongoose.connect('mongodb+srv://dineshk11239:cDsW2zTasOIxGV44@cluster0.h7p3w5d.mongodb.net/SHOP-FOOD').then(()=>console.log("DB Connected"));
   
}


// add your mongoDB connection string above.
// Do not use '@' symbol in your databse user's password else it will show an error.