var request = require('request');

request(
  "https://earthquake.usgs.gov/fdsnws/event/1/query?format=geojson&starttime=2020-01-01&endtime=2020-01-02&minmagnitude=5&limit=1",
  (error, response, body) => {
    if (error || response.statusCode != 200) {
      console.log(`Status code : ${response.statusCode} \nError : ${error}`);
    } else if (response.statusCode == 200) {
        var dataObj = JSON.parse(body);
        console.log(
          `Earthquake occured at : "${dataObj["features"][0]["properties"]["place"]}"`
        );
    }
  }
);