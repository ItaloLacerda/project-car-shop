import supertest from 'supertest';
import Sinon from 'sinon';
import app from '../../src/app';
import CarODM from '../../src/Models/CarODM';
import carMocks from './mocks/carMocks';

describe('Testa rota "/cars"', function () {
  afterEach(function () {
    Sinon.restore();
  });

  it('Verifica se ao bustar todos o carros retorna o status 200', function (done) {
    Sinon.stub(CarODM.prototype, 'read').resolves(carMocks);

    supertest(app)
      .get('/cars')
      .expect(200)
      .end(function (err, _res) {
        if (err) done(err);
        done();
      });
  });
});