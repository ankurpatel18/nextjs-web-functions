"use strict";

const address = process.env.AWS_LAMBDA_HTTP_ENDPOINT || "127.0.0.1:3000";
const endpoint = new URL(`http://${address}`);
if (!endpoint.port) {
  throw new Error("The HTTP endpoint must contain a port");
}
process.env.HOSTNAME = endpoint.hostname;
process.env.PORT = endpoint.port;
process.env.NODE_ENV = "production";
require("./server.js");
