import Ec from '../models/Ec';

class EcController {
  #instance

  async createInstance() {
    var object = await Ec.findOne()
    return object;
  }

  async getInstance() {
    if (!this.#instance) {
      this.#instance = this.createInstance()
    }
    return this.#instance;
  }
}

export default new EcController();
