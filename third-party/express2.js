
var exp= require ("express");
var path= require ("path");
var app= exp();

app.use(exp.static(__dirname +"\\Public")); 
app.use(exp.static(path.join(__dirname , '../')+"\Public"));
console.log(__dirname +"\\Public");
console.log(path.join(__dirname , '../')+"\Public");
//http://localhost:40000/london.jpg
//http://localhost:40000/
//these are not working


app.get('/players',function(req,res){
    var query=req.query;
    console.log("query value is : "+query);//http://localhost:40000/players/?ab="212345"&ab=123
    console.log("query value is : "+JSON.stringify(query));
    /**
     * try this URL and see th Output:
     * http://localhost:40000/players
     * http://localhost:40000/players?abc="212345"&ab=123
     * http://localhost:40000/players?ab="212345"&ab=123
     */
    res.write("abc is : "+query.abc);
    res.write("   ab : "+query.ab);
    res.end("  The entire query parameter i s: "+ JSON.stringify(query)); //this will print results on browser
});

app.get('/players2/:name/:lang',function(req,res){
     
    res.write("name is : " + req.params.name);
    res.write("lang is : " + req.params.lang);
    res.end();
    //http://localhost:40000/players2/mehak/hindi
  
});
var port= process.env.PORT||40000;
app.listen(port,function(){
    console.log("Server is listenning on port "+ port);
})