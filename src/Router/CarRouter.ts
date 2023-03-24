import { Router } from 'express';
import CarController from '../Controllers/CarController';

const routes = Router();

const Controller = new CarController();

const { create, findAll, findById, update, removeVehicle } = Controller;

routes.post('/', create);

routes.get('/', findAll);

routes.get('/:id', findById);

routes.put('/:id', update);

routes.delete('/:id', removeVehicle);

export default routes;