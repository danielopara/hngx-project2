const http = require("http");
const app = require("./index");
const port = 7070;
const server = http.createServer(app);
server.listen(port);
