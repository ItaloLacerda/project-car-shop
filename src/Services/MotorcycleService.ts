import Motorcycle from '../Domains/Motorcycle';
import IMotorcycle from '../Interfaces/IMotorcycle';
import MotorcycleODM from '../Models/MotorcycleODM';
import Errors from '../Utils/erros/Erros';

export default class MotorcycleService {
  private errorMessage: string;

  constructor() { this.errorMessage = 'Motorcycle not found'; }
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
      throw new Errors('404', this.errorMessage);
    }
    return this.createMotorcycleDomain(motorcycle);
  }

  async update(id: string, data: IMotorcycle) {
    const motorcycleODM = new MotorcycleODM();
    const newMotorcycle = await motorcycleODM.update(id, data) as IMotorcycle;
    if (!newMotorcycle) {
      throw new Errors('404', this.errorMessage);
    }
    return this.createMotorcycleDomain(newMotorcycle);
  }

  async delete(id: string) {
    const motorcycleODM = new MotorcycleODM();
    const deleteMotorcycle = await motorcycleODM.delete(id);
    if (deleteMotorcycle.deletedCount === 0) {
      throw new Errors('404', this.errorMessage);
    }
    return deleteMotorcycle;
  }
}