const { Curl } = require('node-libcurl');
const curl = new Curl();

curl.setOpt('URL', 'https://api.example.com/data');
curl.setOpt('FOLLOWLOCATION', true);

curl.on('end', (statusCode, body) => {
    console.log(`Status Code: ${statusCode}`);
    console.log(`Response Body: ${body}`);
    curl.close();
});

curl.on('error', (error) => {
    console.error(`Error: ${error}`);
    curl.close();
});

curl.perform();