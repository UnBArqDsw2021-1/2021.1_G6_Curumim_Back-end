import ProjectInterface from '../utils/ProjectInterface';

class EventController extends ProjectInterface {
  constructor() {
    super();
    this._ProjectType = 'event';
  }
}

export default new EventController();
