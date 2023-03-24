import { Router } from 'express';
import CarController from '../Controllers/CarController';
import Validations from '../middlewares/Validations';

const routes = Router();

const Controller = new CarController();
const { idValidator } = new Validations();

const { create, findAll, findById, update, removeVehicle } = Controller;

routes.post('/', create);

routes.get('/', findAll);

routes.get('/:id', idValidator, findById);

routes.put('/:id', idValidator, update);

routes.delete('/:id', idValidator, removeVehicle);

export default routes;