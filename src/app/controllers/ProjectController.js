import ActivityController from './ActivityController';
import EventController from './EventController';

class ProjectController {
    
    currentType;
    #instance;
    #activity;
    #event;

    constructor(){
        if (!this.#instance){
            this.#instance = new ProjectController();
            this.#instance.#activity = ActivityController;
            this.#instance.#event = EventController;
        }else{
            return this.#instance;
        }   
    }

    changeState(req, res, next) {
        if (req.projectType === "activity"){
            this.#currentType = this.#activity;
        }
        else if(req.projectType === "event"){
            this.#currentType = this.#event;
        }
        else {
            return res.status(500).json({ msg: "Tipo de projeto inválido."});
        }

        return next;
    }

    async action(req, res){
        if(this.#currentType === this.#activity){
            switch (req.action){
                case create:
                    await this.#currentType.createActivity(req, res);
                    break;
                case update:
                    await this.#currentType.updateActivity(req, res);
                    break;
                case listAll:
                    await this.#currentType.listAll(req, res);
                    break;
                case listByUser:
                    await this.#currentType.listMyActivities(req, res);
                    break;
                case dell:
                    await this.#currentType.deleteActivity(req, res);
                    break;
                default: 
                    return res.status(500).json({ msg: "Ação desconhecida"});
            }
        }
        else if(this.#currentType === this.#event){
            switch (req.action){
                case create:
                    await this.#currentType.createEvent(req, res);
                    break;
                case update:
                    await this.#currentType.updateEvent(req, res);
                    break;
                case listAll:
                    await this.#currentType.listAllEvent(req, res);
                    break;
                case listByUser:
                    await this.#currentType.listMyEvents(req, res);
                    break;
                case dell:
                    await this.#currentType.deleteEvent(req, res);
                    break;
                default:
                    return res.status(500).json({ msg: "Ação desconhecida"});    
            }
            
        }
        else{
            return res.status(500).json({ msg: "Projeto não definido."});
        }
    }    
}

export default new ProjectController();