import request from 'supertest';
import { expect } from 'chai';
import Sinon from 'sinon';
import app from '../../src/app';
import MotorcycleODM from '../../src/Models/MotorcycleODM';
import { allMotorcycles, postMotorcycle, updateMotorcycle } from './mocks/motorcycleMocks';
import IMotorcycle from '../../src/Interfaces/IMotorcycle';

const motorcyclePathId = '/motorcycles/6348513f34c397abcad040b2';
describe('Test route "/motorcycles"', function () {
  afterEach(function () {
    Sinon.restore();
  });

  it('Checks if when searching all the motorcycles it returns the status 200', function (done) {
    Sinon.stub(MotorcycleODM.prototype, 'read').resolves(allMotorcycles);

    request(app)
      .get('/motorcycles')
      .expect(200)
      .end(function (err, _res) {
        if (err) done(err);
        done();
      });
  });

  it('Checks if a motorcycle by id correctly returns status 200', function (done) {
    Sinon.stub(MotorcycleODM.prototype, 'findById').resolves(allMotorcycles[0]);

    request(app)
      .get(motorcyclePathId)
      .expect(200)
      .end(function (err, _res) {
        if (err) done(err);
        done();
      });
  });

  it('check if it is possible to successfully register a motorcycle', async function () {
    Sinon.stub(MotorcycleODM.prototype, 'create').resolves(allMotorcycles[1]);

    const response = await request(app)
      .post('/motorcycles')
      .send(postMotorcycle)
      .set('Accept', 'application/json');

    expect(response.status).to.be.equal(201);
    expect(response.body).to.be.deep.equal(allMotorcycles[1]);
  });

  it('tests whether it is possible to upgrade a motorcycle successfully', async function () {
    Sinon.stub(MotorcycleODM.prototype, 'update').resolves(updateMotorcycle as IMotorcycle);

    const response = await request(app)
      .put(motorcyclePathId)
      .send(postMotorcycle)
      .set('Accept', 'application/json');

    expect(response.status).to.be.equal(200);
    expect(response.body).to.be.deep.equal(updateMotorcycle);
  });

  it('tests whether it is possible to successfully delete a motorcycle', async function () {
    Sinon.stub(MotorcycleODM.prototype, 'delete').resolves({ deletedCount: 1, acknowledged: true });

    const response = await request(app)
      .delete(motorcyclePathId);

    expect(response.status).to.be.equal(204);
  });
});