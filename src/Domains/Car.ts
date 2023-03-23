import ICar from '../Interfaces/ICar';

export default class Car {
  protected id: string | undefined;
  protected model: string;
  protected year: number;
  protected color: string;
  protected buyValue: number;
  protected status?: boolean;
  private doorsQty: number;
  private seatsQty: number;

  constructor({ id, model, year, color, buyValue, doorsQty, seatsQty, status }: ICar) {
    this.id = id;
    this.model = model;
    this.year = year;
    this.color = color;
    this.buyValue = buyValue;
    this.doorsQty = doorsQty;
    this.seatsQty = seatsQty;
    this.status = status || false;
  }
}
