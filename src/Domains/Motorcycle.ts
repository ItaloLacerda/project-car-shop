import IMotorcycle from '../Interfaces/IMotorcycle';
import Vehicle from './Vehicle';

export default class Motorcycle extends Vehicle {
  private category: 'Street' | 'Custom' | 'Trail';
  private engineCapacity: number;

  constructor({ id, model, year, color, buyValue, status, category, engineCapacity }: IMotorcycle) {
    super({ id, model, year, color, buyValue, status });
    this.category = category;
    this.engineCapacity = engineCapacity;
  }
}