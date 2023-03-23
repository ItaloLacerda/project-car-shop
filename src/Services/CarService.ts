import Car from '../Domains/Car';
import ICar from '../Interfaces/ICar';
import CarODM from '../Models/CarODM';

export default class CarService {
  private createCarDomain(car: ICar): Car | null {
    if (car) {
      return new Car(car);
    }
    return null;
  }

  public async register(data: ICar) {
    const carODM = new CarODM();
    const newCar = await carODM.create(data);
    console.log(newCar);
    
    return this.createCarDomain(newCar);
  }
}