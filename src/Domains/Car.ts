import ICar from '../Interfaces/ICar';

export default class Car {
  private _id: string | undefined;
  private _model: string;
  private _year: number;
  private _color: string;
  private _buyValue: number;
  private _doorsQty: number;
  private _seatsQty: number;
  private _status?: boolean | false;

  constructor({ id, model, year, color, buyValue, doorsQty, seatsQty, status }: ICar) {
    this._id = id;
    this._model = model;
    this._year = year;
    this._color = color;
    this._buyValue = buyValue;
    this._doorsQty = doorsQty;
    this._seatsQty = seatsQty;
    this._status = status;
  }

  getId() {
    return this._id;
  }

  set id(newId: string) {
    this._id = newId;
  }

  get model() {
    return this._model;
  }

  set model(newModel: string) {
    this._model = newModel;
  }

  get year() {
    return this._year;
  }

  set year(newYear: number) {
    this._year = newYear;
  }

  get color() {
    return this._color;
  }

  set color(newColor: string) {
    this._color = newColor;
  }

  get buyValue() {
    return this._buyValue;
  }

  set buyValue(newBuyValue: number) {
    this._buyValue = newBuyValue;
  }

  get doorsQty() {
    return this._doorsQty;
  }

  set doorsQty(newdoorsQty: number) {
    this._doorsQty = newdoorsQty;
  }

  get seatsQty() {
    return this._seatsQty;
  }

  set seatsQty(newseatsQty: number) {
    this._seatsQty = newseatsQty;
  }

  get status() {
    return this._status;
  }

  set status(newStatus) {
    this._status = newStatus;
  }
}
