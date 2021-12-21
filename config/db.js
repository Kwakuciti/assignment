import express from 'express';
import  mongoose from 'mongoose';
import  dotenv from 'dotenv';


dotenv.config();
const db = process.env.DB_URL
export function mongoDBConnection(){
    mongoose.connect(db).then(()=>{
        console.log('connected to mongo successfully')
    }).catch((error)=>{
        console.log('Something went wrong',error);
    })
}
