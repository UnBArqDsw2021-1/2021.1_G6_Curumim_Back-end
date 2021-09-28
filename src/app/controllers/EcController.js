import EC from "../models/EC";

class EC {

    async store(req, res) {

        try {

          const { id,name,adress,description} = await EC.create(req.body);
    
          return res.json({
            id,
            name,
            adress, 
            description
          });
    
        }catch(err){
          return res.status(500).json({ error: 'Falha na criação do centro educacional.'});
        }
      }

}

export default new EC();