const apiCallFromRequest = require('./Request')
const apiCallFromNode = require('./NodeJsCall')

const http = require('http')

http.createServer((req, res) => {
    if (req.url === "/api/rates") {
        apiCallFromRequest.callApi(function (response) {
            console.log(JSON.stringify(response))
            res.write(JSON.stringify(response));
            res.end()
        })
    }
    else if (req.url === "/node") {
        apiCallFromNode.callApi(function (response) {
            res.write(response);
            res.end();
        })
    }
}).listen(3000);
console.log("Seervice running on 3000 port...")