const { createServer } = require("http");
const { requestHandler } = require("./request_handler/index.js");
const { print } = require("./print/index.js");

const server = createServer(requestHandler);

const port = 5050;

server.listen(port, () => {
    print(`Server Running on Port: ${port}`);
});
