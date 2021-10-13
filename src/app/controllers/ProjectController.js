import ActivityController from './ActivityController';
import EventController from './EventController';

class ProjectController {
    #activity;
    #event;
    #currentType;

    constructor(){
        this.#activity = ActivityController;
        this.#event = EventController;
    }

    changeState (req, res, next) {
        
        const type = (req.body.projectType || req.params.type);

        if (type === "activity"){
            
            this.#currentType = this.#activity;
        }
        else if(type === "event"){
            this.#currentType = this.#event;
        }
        else {
            return res.status(500).json({ msg: "Tipo de projeto inválido."});
        }

        return next();
    }

    async create(req, res) {
        await this.#currentType.create(req, res);
    }

    async listAll(req, res) {
        await this.#currentType.listAll(req, res);
    }

    //função temporário somente para testar funcionalidade de deletar
    async listByUser(req, res) {
        await this.#activity.listByUser(req, res);
    }

    async listAll(req, res) {
        await this.#currentType.listAll(req, res);
    }

    async update(req, res) {
        await this.#currentType.update(req, res);
    }

    async show (req, res) {
        await this.#currentType.show(req, res);
    }

    async delete(req, res) {
        await this.#currentType.delete(req, res);
    }    
}

export default new ProjectController();