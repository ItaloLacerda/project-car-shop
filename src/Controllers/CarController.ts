import { NextFunction, Request, Response } from 'express';
import ICar from '../Interfaces/ICar';
import CarService from '../Services/CarService';

export default class CarController {
  private service: CarService;

  constructor() {
    this.service = new CarService();
  }

  create = async (req: Request, res: Response, next: NextFunction) => {
    const { model, year, color, status, buyValue,
      doorsQty, seatsQty } = req.body;
    const car: ICar = {
      model,
      year,
      color,
      status,
      buyValue,
      doorsQty,
      seatsQty,
    };

    try {
      const newCar = await this.service.register(car);
      return res.status(201).json(newCar);
    } catch (error) {
      next(error);
    }
  };

  findAll = async (req: Request, res: Response, next: NextFunction) => {
    try {
      const allCars = await this.service.findAll();
      return res.status(200).json(allCars);
    } catch (error) {
      next(error);
    }
  };

  findById = async (req: Request, res: Response, next: NextFunction) => {
    const { id } = req.params;
    
    try {
      const car = await this.service.findById(id);
      return res.status(200).json(car);
    } catch (error) {
      next(error);
    }
  };

  update = async (req: Request, res: Response, next: NextFunction) => {
    const { id } = req.params;
    const { body } = req;
    
    try {
      const newCar = await this.service.update(id, body);
      return res.status(200).json(newCar);
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