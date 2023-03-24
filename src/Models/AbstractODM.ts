import {
  Model,
  models,
  Schema,
  UpdateQuery,
  model,
} from 'mongoose';
  
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
    return this.model.deleteOne({ _id });
  }

  async findById(_id: string): Promise<T | null> {
    return this.model.findById({ _id });
  }
}
  
export default AbstractODM;