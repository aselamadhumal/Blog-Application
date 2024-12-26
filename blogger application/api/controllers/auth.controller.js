import User from '../models/user.models.js';
import bcryptjs from 'bcryptjs';
import { errorHandler } from '../utils/error.js';

export const signup = async (req, res,next) => {
    const { username, email, password} = req.body;

    console.log(username, email, password);

   if (!username || !email || !password || username === '' || email === '' || password === '') {
       //using errorHandler
        next(errorHandler(400, 'Please fill all fields'));
   }

   //hidden password
   const hasedPassword = bcryptjs.hashSync(password,10);

   const newUser = new User({ 
    username,
     email, 
     password: hasedPassword,
   });
   
   try{
    await newUser.save();
    res.json('Signup successful');
   }
   catch(error){
       next(error);
   }





}