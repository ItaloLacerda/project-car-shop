import { NextFunction, Request, Response } from 'express';
import IMotorcycle from '../Interfaces/IMotorcycle';
import MotorcycleService from '../Services/MotorcycleService';

export default class MotorcycleController {
  private service: MotorcycleService;

  constructor() {
    this.service = new MotorcycleService();
  }

  create = async (req: Request, res: Response, next: NextFunction) => {
    const { model, year, color, status, buyValue,
      category, engineCapacity } = req.body;
    const motorcycle: IMotorcycle = {
      model,
      year,
      color,
      status,
      buyValue,
      category,
      engineCapacity,
    };

    try {
      const newMotorcycle = await this.service.register(motorcycle);
      return res.status(201).json(newMotorcycle);
    } catch (error) {
      next(error);
    }
  };

  findAll = async (_req: Request, res: Response, next: NextFunction) => {
    try {
      const allMotorcycle = await this.service.findAll();
      return res.status(200).json(allMotorcycle);
    } catch (error) {
      next(error);
    }
  };

  findById = async (req: Request, res: Response, next: NextFunction) => {
    const { id } = req.params;
    
    try {
      const motorcycle = await this.service.findById(id);
      return res.status(200).json(motorcycle);
    } catch (error) {
      next(error);
    }
  };

  update = async (req: Request, res: Response, next: NextFunction) => {
    const { id } = req.params;
    const { body } = req;
    
    try {
      const newMotorcycle = await this.service.update(id, body);
      return res.status(200).json(newMotorcycle);
    } catch (error) {
      next(error);
    }
  };

  removeVehicle = async (req: Request, res: Response, next: NextFunction) => {
    const { id } = req.params;
    
    try {
      await this.service.delete(id);
      return res.status(204).json();
    } catch (error) {
      next(error);
    }
  };
}