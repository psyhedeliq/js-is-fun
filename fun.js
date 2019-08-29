// ************** Using Objects for Lookups ************** //
/*
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
*/

// ************** Testing Objects for Properties ************** //
const animalBreed = {
  dog: 'Doberman',
  cat: 'Burmese',
  bird: 'Parrot'
};

const checkAnimalBreed = checkProp => {
  // Your Code Here
  if (animalBreed.hasOwnProperty(checkProp) === true) {
    return animalBreed[checkProp];
  } else {
    return 'Not Found';
  }
};

// Test your code by modifying these values
console.log(checkAnimalBreed('bird'));
