// Nesta pasta se localiza todos os controllers
import Ec from "../models/Ec.js";

class TestController {
    async createEC (req, res) {
        const {name, adress, description} = req.body

        const ec = await Ec.create({name, adress, description});

        return res.json(ec); 
    }
}

export default new TestController