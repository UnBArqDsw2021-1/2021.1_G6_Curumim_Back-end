const express = require("express");

const server = express();

server.use(express.json());


server.get("/",(req, res) =>{
    res.json({status: true})

})

server.listen(3333)