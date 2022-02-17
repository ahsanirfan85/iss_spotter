const request = require('request-promise-native');

const fetchMyIP = function() {
  return request('https://api.ipify.org/?format=json');
};

const fetchCoordsByIP = function(body) {
  const ip = JSON.parse(body).ip;
  return request(`https://api.freegeoip.app/json/${ip}?apikey=8b30f9f0-9012-11ec-942f-4bb7ab56b05c`);
};

const fetchISSFlyOverTimes = function(body) {
  const loc = {
                latitude: JSON.parse(body).latitude,
                longitude: JSON.parse(body).longitude
              };
  return request(`https://iss-pass.herokuapp.com/json/?lat=${loc.latitude}&lon=${loc.longitude}`);
};

const nextISSTimesForMyLocation = function() {

  return fetchMyIP()
  .then(fetchCoordsByIP)
  .then(fetchISSFlyOverTimes)
  .then(body => {
    const { response } = JSON.parse(body);
    return response;
  });

};

module.exports = { nextISSTimesForMyLocation };