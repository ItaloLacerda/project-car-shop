import Motorcycle from '../Domains/Motorcycle';
import IMotorcycle from '../Interfaces/IMotorcycle';
import MotorcycleODM from '../Models/MotorcycleODM';
import Errors from '../Utils/erros/Erros';

export default class MotorcycleService {
  private createMotorcycleDomain(motorcycle: IMotorcycle): Motorcycle | null {
    if (motorcycle) {
      return new Motorcycle(motorcycle);
    }
    return null;
  }

  async register(data: IMotorcycle) {
    const motorcycleODM = new MotorcycleODM();
    const newMotorcycle = await motorcycleODM.create(data);
    return this.createMotorcycleDomain(newMotorcycle);
  }

  async findAll() {
    const motorcycleODM = new MotorcycleODM();
    const allCar = await motorcycleODM.read() as IMotorcycle[];
    return allCar.map((car) => this.createMotorcycleDomain(car));
  }

  async findById(id: string) {
    const motorcycleODM = new MotorcycleODM();
    
    const motorcycle = await motorcycleODM.findById(id) as IMotorcycle;
    if (!motorcycle) {
      throw new Errors('404', 'Motorcycle not found');
    }
    return this.createMotorcycleDomain(motorcycle);
  }
}