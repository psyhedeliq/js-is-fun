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
/*
const animalBreed = {
  dog: 'Doberman',
  cat: 'Burmese',
  bird: 'Parrot'
};

const checkAnimalBreed = checkProp => {
  if (animalBreed.hasOwnProperty(checkProp) === true) {
    return animalBreed[checkProp];
  } else {
    return 'Not Found';
  }
};

// Test your code by modifying these values
console.log(checkAnimalBreed('bird'));
*/

// ************** Car Collection Exercise ************** //
// You are given a JSON object representing a part of your car collection. Each car has several properties and a unique id number as its key. Not all cars have complete information. Write a function which takes a car id (like 1), a property prop (like "brand" or "options"), and a value (like "leather seats") to modify the data in this collection.
/*
const carCollection = {
  '1': {
    brand: 'BMW',
    model: 'X3',
    options: ['air conditioning', 'leather seats']
  },
  '2': {
    brand: 'Mercedes',
    model: 'E320',
    options: ['heated seats', 'panoramic sunroof']
  },
  '3': {
    brand: 'Lamborghini',
    options: []
  },
  '4': {
    brand: 'Audi'
  }
};

// console.log(carCollection);

const updateData = (id, prop, value) => {
  if (prop !== 'options' && value) {
    carCollection[id][prop] = value;
  }

  if (prop === 'options' && !carCollection[id].hasOwnProperty(prop)) {
    carCollection[id][prop] = [value];
  }

  if (prop === 'options' && value) {
    carCollection[id][prop].push(value);
  }

  if (!value) {
    delete carCollection[id][prop];
  }

  return carCollection;
};

console.log(updateData(4, 'model', 'A8'));
console.log(updateData(4, 'options', ['leather seats', 'AC']));
console.log(updateData(4, 'options', ['leather seats']));
console.log(updateData(4, 'options', []));
console.log(updateData(4, 'options'));

console.log(
  updateData(1, 'options', [
    'air conditioning',
    'leather seats',
    'heated windshield'
  ])
);
*/

// ************** Nesting For Loops ************** //
/*
const multiplyAll = arr => {
  let product = 1;

  for (let i = 0; i < arr.length; i++) {
    for (let j = 0; j < arr[i].length; j++) {
      product *= arr[i][j];
    }
  }
  return product;
};

console.log(
  multiplyAll([
    [1, 2],
    [3, 4],
    [5, 6, 7]
  ])
);
*/

// ************** Do...While Loops ************** //
/*
const myArray = [];
let i = 10;

do {
  myArray.push(i);
  i++;
} while (i < 10);

console.log(myArray);
*/

// ************** Recursion ************** //
// Write a recursive function, sum(arr, n), that returns the sum of the elements from 0 to n inclusive in an array arr.

const sum = (arr, n) => {
  if (n <= 0) {
    return arr[0];
  } else {
    return sum(arr, n - 1) + arr[n];
  }
};

console.log(sum([2, 3, 4], 1));
