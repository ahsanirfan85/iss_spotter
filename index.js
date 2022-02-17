// index.js
// const { fetchMyIP,  } = require('./iss');

// fetchMyIP((error, ip) => {
//   if (error) {
//     console.log("It didn't work!" , error);
//     return;
//   }
//   console.log(`It worked! Returned IP: ${ip}\nAnd it is a ${typeof ip}!`);
// });

// const { fetchCoordsByIP } = require('./iss');

// fetchCoordsByIP("99.255.168.27", (error, data) => {
//   if (error) {
//     console.log("It didn't work!" , error);
//     return;
//   }
//   console.log('It worked! Returned Coords:');
//   console.log(data);
//   console.log(`And it is an ${typeof data}!`);
// });

// const { fetchISSFlyOverTimes } = require('./iss');

// fetchISSFlyOverTimes({ latitude: '49.27670', longitude: '-123.13000' }, (error, data) => {
//   if (error) {
//     console.log("It didn't work!" , error);
//     return;
//   }
//   console.log('It worked! Returned Rise Times:');
//   console.log(data);
//   console.log(`And it is an ${typeof data}!`);
// });

const { nextISSTimesForMyLocation } = require('./iss');

nextISSTimesForMyLocation((error, passTimes) => {
  if (error) {
    return console.log("It didn't work!", error);
  }

  for (const pass of passTimes) {
    const date = new Date(0);
    date.setUTCSeconds(pass.risetime)
    const duration = pass.duration;
    console.log(`Next pass at ${date} for ${duration} seconds!`);
  }
  
});