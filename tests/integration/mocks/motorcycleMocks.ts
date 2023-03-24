import IMotorcycle from '../../../src/Interfaces/IMotorcycle';

const model1 = 'Honda XRE 300';

export const allMotorcycles: IMotorcycle[] = [
  {
    id: '6348513f34c397abcad040b2',
    model: 'Honda Cb 600f Hornet',
    year: 2005,
    color: 'Yellow',
    status: true,
    buyValue: 30.000,
    category: 'Street',
    engineCapacity: 600,
  },
  {
    id: '6348513f34c397abcad040b5',
    model: model1,
    year: 2015,
    color: 'Black',
    status: true,
    buyValue: 23.000,
    category: 'Trail',
    engineCapacity: 300,
  },
];

export const updateMotorcycle = {
  id: '6348513f34c397abcad040b2',
  model: model1,
  year: 2015,
  color: 'Black',
  status: true,
  buyValue: 23.000,
  category: 'Trail',
  engineCapacity: 300,
};

export const postMotorcycle = {
  model: model1,
  year: 2015,
  color: 'Black',
  status: true,
  buyValue: 23.000,
  category: 'Trail',
  engineCapacity: 300,
};
