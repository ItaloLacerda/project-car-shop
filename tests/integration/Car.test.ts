import request from 'supertest';
import { expect } from 'chai';
import Sinon from 'sinon';
import app from '../../src/app';
import CarODM from '../../src/Models/CarODM';
import { allCars, postCar, updateCar } from './mocks/carMocks';

const carPathId = '/cars/6348513f34c397abcad040b2';
describe('Test route "/cars"', function () {
  afterEach(function () {
    Sinon.restore();
  });

  it('Checks if when searching all the cars it returns the status 200', function (done) {
    Sinon.stub(CarODM.prototype, 'read').resolves(allCars);

    request(app)
      .get('/cars')
      .expect(200)
      .end(function (err, _res) {
        if (err) done(err);
        done();
      });
  });

  it('Checks if a car by id correctly returns status 200', function (done) {
    Sinon.stub(CarODM.prototype, 'findById').resolves(allCars[0]);

    request(app)
      .get(carPathId)
      .expect(200)
      .end(function (err, _res) {
        if (err) done(err);
        done();
      });
  });

  it('check if it is possible to successfully register a car', async function () {
    Sinon.stub(CarODM.prototype, 'create').resolves(allCars[1]);

    const response = await request(app)
      .post('/cars')
      .send(postCar)
      .set('Accept', 'application/json');

    expect(response.status).to.be.equal(201);
    expect(response.body).to.be.deep.equal(allCars[1]);
  });

  it('tests whether it is possible to upgrade a car successfully', async function () {
    Sinon.stub(CarODM.prototype, 'update').resolves(updateCar);

    const response = await request(app)
      .put(carPathId)
      .send(postCar)
      .set('Accept', 'application/json');

    expect(response.status).to.be.equal(200);
    expect(response.body).to.be.deep.equal(updateCar);
  });

  it('tests whether it is possible to successfully delete a car', async function () {
    Sinon.stub(CarODM.prototype, 'delete').resolves({ deletedCount: 1, acknowledged: true });

    const response = await request(app)
      .delete(carPathId);

    expect(response.status).to.be.equal(204);
  });
});