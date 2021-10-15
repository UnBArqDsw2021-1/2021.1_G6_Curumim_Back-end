import Ec from '../models/Ec';

class EcController {
  #instance

  constructor(){
    if (this.#instance) {
      this.#instance = this.createInstance()
    }

    return this.getInstance
  }

  async createInstance() {
    var object = await Ec.findOne()
    return object;
  }

  async getInstance() {
    return this.#instance;
  }
}

export default EcController;