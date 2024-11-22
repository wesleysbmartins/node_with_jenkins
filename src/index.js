const { createServer } = require("http");
const { requestHandler } = require("./request_handler/index.js");
const { print } = require("./print/index.js");

const server = createServer(requestHandler);

const port = process.env.PORT || 5050;
const host = process.env.HOST || "0.0.0.0";

server.listen(port, host, () => {
    print(`Server Running on Port: ${port}`);
});
