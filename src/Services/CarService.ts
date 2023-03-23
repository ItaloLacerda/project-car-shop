import Car from '../Domains/Car';
import ICar from '../Interfaces/ICar';
import CarODM from '../Models/CarODM';
import Errors from '../Utils/erros/Erros';

export default class CarService {
  private createCarDomain(car: ICar): Car | null {
    if (car) {
      return new Car(car);
    }
    return null;
  }

  async register(data: ICar) {
    const carODM = new CarODM();
    const newCar = await carODM.create(data);
    return this.createCarDomain(newCar);
  }

  async findAll() {
    const carODM = new CarODM();
    const allCar = await carODM.read() as ICar[];
    return allCar.map((car) => this.createCarDomain(car));
  }

  async findById(id: string) {
    const carODM = new CarODM();
    
    const car = await carODM.findById(id) as ICar;
    if (!car) {
      throw new Errors('404', 'Car not found');
    }
    return this.createCarDomain(car);
  }

  async update(id: string, data: ICar) {
    const carODM = new CarODM();
    const newCar = await carODM.update(id, data) as ICar;
    if (!newCar) {
      throw new Errors('404', 'Car not found');
    }
    return this.createCarDomain(newCar);
  }
}