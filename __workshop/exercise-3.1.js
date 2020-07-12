// Exercise 3.1 - `getIssPosition`
// -----------------------------

// require the 'request-promise' module.
const request = require('request-promise');
// Returns the current position of the ISS
const getIssPosition = () => {
  // write some code...
  return request(' http://api.open-notify.org/iss-now.json')
    .then((response) => JSON.parse(response))
    .then((parsedResponse) => {
      const { latitude, longitude } = parsedResponse.iss_position;
      return { lat: latitude, lng: longitude };
    })
};

getIssPosition().then((result) => console.log(result));

module.exports = { getIssPosition };