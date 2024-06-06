
const options = {
  enableHighAccuracy: true,
  timeout: 5000,
  maximumAge: 0
};

function onsuccess(pos) {
  const { latitude, longitude, accuracy } = pos.coords;
  console.log('Your current position is:');
  console.log(`Latitude : ${latitude}`);
  console.log(`Longitude: ${longitude}`);
  console.log(`More or less ${accuracy} meters.`);
} 

function onerror(err) {
  console.warn(`ERROR(${err.code}): ${err.message}`);
}

navigator.geolocation.getCurrentPosition(onsuccess, onerror, options);

// Challenge: Make this work: 

function getGeolocation(options) {
  return new Promise((resolve, reject) => {
    navigator.geolocation.getCurrentPosition(resolve, reject, options);
  });
}

getGeolocation(options)
  .then(pos => {
    const { latitude, longitude, accuracy } = pos.coords;
    console.log('Your current position is:');
    console.log(`Latitude : ${latitude}`);
    console.log(`Longitude: ${longitude}`);
    console.log(`More or less ${accuracy} meters.`);
  })
  .catch(err => {
    console.warn(`ERROR(${err.code}): ${err.message}`);
  });

// Like this: 

// getGeolocation(options)
//   .then(pos => { })
//   .catch(err => { })

