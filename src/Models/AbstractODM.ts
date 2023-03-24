import {
  isValidObjectId,
  Model,
  models,
  Schema,
  UpdateQuery,
  model,
} from 'mongoose';
import Errors from '../Utils/erros/Erros';
  
abstract class AbstractODM<T> {
  protected model: Model<T>;
  protected schema: Schema;
  protected modelName: string;
  
  constructor(schema: Schema, modelName: string) {
    this.schema = schema;
    this.modelName = modelName;
    this.model = models[this.modelName] || model(this.modelName, this.schema);
  }
  
  async create(obj: T): Promise<T> {
    return this.model.create({ ...obj });
  }
  
  async update(_id: string, obj: Partial<T>): Promise<T | null> {
    if (!isValidObjectId(_id)) throw new Errors('422', 'Invalid mongo id');
    
    return this.model.findByIdAndUpdate(
      { _id },
      { ...obj } as UpdateQuery<T>,
      { new: true },
    );
  }

  async read(): Promise<T[] | null> {
    return this.model.find({});
  }

  async delete(_id: string) {
    if (!isValidObjectId(_id)) throw new Errors('422', 'Invalid mongo id');
    return this.model.deleteOne({ _id });
  }
}
  
export default AbstractODM;