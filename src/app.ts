import express from 'express';
import ErrorHandler from './middlewares/ErrorHandler';
import CarRouter from './Router/CarRouter';

const app = express();
app.use(express.json());
app.use('/cars', CarRouter);
app.use(ErrorHandler.handle);

export default app;
