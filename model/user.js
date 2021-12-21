import  mongoose from "mongoose";
 const {Schema,model} = mongoose;

 const userSchema = Schema({
     fist_name:{
         type: String,
         requireed: true,
     },
     last_name:{
         type: String,
         requireed: true,
     },
     date_of_birth :{
         type:String,
         requireed:true,
     },
     shchool:{
         type:String,
         requireed:true,
     }
 })

 export const UserSchema = model ('students',userSchema)