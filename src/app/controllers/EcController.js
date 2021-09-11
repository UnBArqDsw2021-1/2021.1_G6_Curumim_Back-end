import EC from "../models/EC";

class EC {

    async store(req, res) {

        try {

          const { id,name,adress,description} = await Admin.create(req.body);
    
          return res.json({
            id,
            name,
            adress, 
            description
          });
    
        }catch(err){
          return res.status(500).json({ error: 'Falha na criação do evento'});
        }
      }

}

export default new EC();