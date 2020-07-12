// Exercise 1
// ------------
const arrayOfWords = ['cucumber', 'tomatos', 'avocado'];
const complicatedArray = ['cucumber', 44, true];

const makeAllCaps = (array) => {
  // write some code
  myPromise = new Promise((resolve, reject) => {
    if (array.every(value => typeof value === 'string')) {
      resolve(array.map(word => word.toUpperCase()));
    } else {
      reject(`array is not an array of strings`);
    }
  });
  return myPromise;
};

const sortWords = (array) => {
  // write some code
  myPromise = new Promise((resolve, reject) => {
    if (array.every(value => typeof value === 'string')) {
      resolve(array.sort());
    } else {
      reject(`array is not an array of strings`);
    }
  });
  return myPromise;
};

// Calling (testing)
makeAllCaps(arrayOfWords)
  .then(sortWords)
  .then((result) => console.log(result))
  .catch((error) => console.log(error));

makeAllCaps(complicatedArray)
  .then(sortWords)
  .then((result) => console.log(result))
  .catch((error) => console.log(error));
