// Exercise 3.2 - `getAddressPosition`
// ---------------------------------

const opencage = require('opencage-api-client');

const getPositionFromAddress = (address) => {

  return opencage.geocode({ q: address, language: 'en'})
    .then(data => {
      return data.results[0].geometry;
    })

  // return something...
};

getPositionFromAddress('1455 Boulevard de Maisonneuve O, Montréal, QC H3G 1M8').then(response => console.log(response));

module.exports = { getPositionFromAddress };
