import express from 'express';
import { getAllUsers,createUser } from '../controller/userController.js';

const route = express.Router();

route.route('/').get(getAllUsers).post(createUser);
route.route('user/:id').put().delete();



export const UserRoute =  route;