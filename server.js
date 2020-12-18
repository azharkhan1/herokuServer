var express = require("express");
var server = express();
const PORT = process.env.PORT || 3000;

server.get("/", (req,res,next)=>{

    res.send("I am here to serve you ! ");

});
server.get("/food", (req,res,next)=>{

    res.send("I am here to serve you food and water ! ");

});

server.listen( PORT , () => {
    console.log("server is runnin on port "+PORT);
})



