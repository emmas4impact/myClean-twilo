const express = require("express");
const cors = require("cors");
const server = express();


server.use(cors());

server.listen(`server is listening on ${process.env.PORT}`);