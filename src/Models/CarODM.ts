import { isValidObjectId, Schema } from 'mongoose';
import ICar from '../Interfaces/ICar';
import Errors from '../Utils/erros/Erros';
import AbstractODM from './AbstractODM';

export default class CarODM extends AbstractODM<ICar> {
  constructor() {
    const schema = new Schema<ICar>({
      model: { type: String, required: true },
      year: { type: Number, required: true },
      color: { type: String, required: true },
      status: { type: Boolean, required: false },
      buyValue: { type: Number, required: true },
      doorsQty: { type: Number, required: true },
      seatsQty: { type: Number, required: true },
    });
    super(schema, 'Car');
  }

  public async findById(_id: string): Promise<ICar | null> {
    if (!isValidObjectId(_id)) {
      throw new Errors('422', 'Invalid mongo id');
    }
    return this.model.findById({ _id });
  }
}