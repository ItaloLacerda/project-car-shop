import ICar from '../../../src/Interfaces/ICar';

export const allCars: ICar[] = [
  {
    id: '6348513f34c397abcad040b2',
    model: 'Marea',
    year: 2002,
    color: 'Black',
    status: true,
    buyValue: 15.990,
    doorsQty: 4,
    seatsQty: 5,
  },
  {
    id: '6348513f34c397abcad040b3',
    model: 'Gol',
    year: 2010,
    color: 'Green',
    status: true,
    buyValue: 30.990,
    doorsQty: 2,
    seatsQty: 6,
  },
];

export const updateCar = {
  id: '6348513f34c397abcad040b2',
  model: 'Gol',
  year: 2010,
  color: 'Green',
  status: true,
  buyValue: 30.990,
  doorsQty: 2,
  seatsQty: 6,
};

export const postCar = {
  model: 'Gol',
  year: 2010,
  color: 'Green',
  status: true,
  buyValue: 30.990,
  doorsQty: 2,
  seatsQty: 6,
};
