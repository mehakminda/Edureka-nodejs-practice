var http= require("http");
var server = http.createServer(function(req,res){
    console.log("Method:",req.method);
    res.end("Hello World!");
});
 server.listen(3333,function(){
    console.log("HTTP server is running on port 3333");
 })