import { Router } from 'express';
import MotorcycleController from '../Controllers/MotorcycleController';

const routes = Router();

const Controller = new MotorcycleController();

const { create, findAll, findById } = Controller;

routes.post('/', create);

routes.get('/', findAll);

routes.get('/:id', findById);

export default routes;