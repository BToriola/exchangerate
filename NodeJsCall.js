const https = require('https')

_EXTERNAL_URL = 'https://api.exchangeratesapi.io/latest'

const callExternalApiUsingHttp = (callback) => {
    https.get(_EXTERNAL_URL, (res) => {
        let data = '';
   

    // A chunk of data has been received.
    res.on('data', (chunk) => {
        data += chunk;
    });
   

    // The whole response has been received. Print out the result
    res.on('end', () => {
        return callback(data);
    });

    }).on("error", (err) => {
        console.log("Error: " + err.message)
    })


}

module.exports.callApi = callExternalApiUsingHttp