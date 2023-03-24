import { Router } from 'express';
import MotorcycleController from '../Controllers/MotorcycleController';
import Validations from '../middlewares/Validations';

const routes = Router();

const Controller = new MotorcycleController();
const { idValidator } = new Validations();

const { create, findAll, findById, update, removeVehicle } = Controller;

routes.post('/', create);

routes.get('/', findAll);

routes.get('/:id', idValidator, findById);

routes.put('/:id', idValidator, update);

routes.delete('/:id', idValidator, removeVehicle);

export default routes;