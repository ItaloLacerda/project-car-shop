import ICar from '../Interfaces/ICar';
import Vehicle from './Vehicle';

export default class Car extends Vehicle {
  private doorsQty: number;
  private seatsQty: number;

  constructor({ id, model, year, color, buyValue, doorsQty, seatsQty, status }: ICar) {
    super({ id, model, year, color, buyValue, status });
    this.doorsQty = doorsQty;
    this.seatsQty = seatsQty;
  }
}
