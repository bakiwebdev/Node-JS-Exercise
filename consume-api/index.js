const axios = require('axios');

// Make a request for a user with a given ID
axios.get('https://randomuser.me/api')
  .then(function (response) {
    // handle success
    console.log(response.data.results);
  })
  .catch(function (error) {
    // handle error
    console.log(error.response.status);
  })
  .then(function () {
    // always executed
    console.log("The Fetching is done");
  });