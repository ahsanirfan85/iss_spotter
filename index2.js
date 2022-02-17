const { nextISSTimesForMyLocation } = require('./iss_promised');

nextISSTimesForMyLocation()
  .then((passTimes) => {
    for (const pass of passTimes) {
      const date = new Date(0);
    date.setUTCSeconds(pass.risetime)
    const duration = pass.duration;
    console.log(`Next pass at ${date} for ${duration} seconds!`);
    }
    })
  .catch((error) => {
    console.log("It didn't work: ", error.message);
  });