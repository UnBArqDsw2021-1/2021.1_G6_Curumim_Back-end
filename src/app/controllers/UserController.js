import User from '../models/User'

class UserController {

  async store(req, res) {
        
    try{


      const { usertype, name, cpf, birthday, email, password } = await User.create(req.body);  
        return res.json({
            usertype, 
            name, 
            cpf, 
            birthday, 
            email, 
            password
          }); 
    
    }catch(err){
        return res.status(500).json({ error: err.stack });
     }
  }
}

export default new UserController(); 