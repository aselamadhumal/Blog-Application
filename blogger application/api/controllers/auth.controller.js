import User from '../models/user.models.js';
import bcryptjs from 'bcryptjs';

export const signup = async (req, res) => {
    const { username, email, password} = req.body;

   if (!username || !email || !password || username === '' || email === '' || password === '') {
       return res.status(400).json({ message: 'All fields are required.' });
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
    res.json('Signup successfull');
   }
   catch(error){
       res.status(400).json({ message: 'erro Msg ' });
   }


   await newUser.save();
   res.json('Signup successfull');



}