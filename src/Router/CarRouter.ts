import { Router } from 'express';
import CarController from '../Controllers/CarController';

const routes = Router();

const Controller = new CarController();

const { create } = Controller;

routes.post('/', create);

export default routes;