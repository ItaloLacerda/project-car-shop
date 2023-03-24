import { isValidObjectId } from 'mongoose';
import { NextFunction, Request, Response } from 'express';
import Errors from '../Utils/erros/Erros';

export default class Validations {
  idValidator = (req: Request, _res: Response, next: NextFunction) => {
    const { id } = req.params;
    
    if (!isValidObjectId(id)) {
      throw new Errors('422', 'Invalid mongo id');
    }
    return next();
  };
}