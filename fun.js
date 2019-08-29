// ************** Using Objects for Lookups ************** //

const carModel = val => {
  let result = '';

  const brand = {
    bmw: 'X3',
    lamborghini: 'Aventador',
    renault: 'Clio',
    dacia: 'Duster',
    mercedes: 'S600',
    toyota: 'Prius'
  };

  result = brand[val];

  return result;
};

console.log(carModel('toyota'));
