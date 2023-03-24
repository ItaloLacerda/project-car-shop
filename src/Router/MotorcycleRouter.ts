import { Router } from 'express';
import MotorcycleController from '../Controllers/MotorcycleController';

const routes = Router();

const Controller = new MotorcycleController();

const { create, findAll, findById, update, removeVehicle } = Controller;

routes.post('/', create);

routes.get('/', findAll);

routes.get('/:id', findById);

routes.put('/:id', update);

routes.delete('/:id', removeVehicle);

export default routes;