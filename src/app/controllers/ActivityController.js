import ProjectInterface from '../utils/ProjectInterface';

class ActivityController extends ProjectInterface {
  constructor() {
    super();
    this._ProjectType = 'activity';
  }
}

export default new ActivityController();
