var fs=require('fs');

console.log("The Program starts ");

var options={
    encoding:'utf8',
    flag: 'r'
}

//async api
fs.readFile('./ReadMe.txt',options,  function(err,fileData){
    if(err){
        console.log(err);
    }
    else{
        console.log(fileData);
    }

});
fs.readFile('./ReadMe2.txt',options,  function(err,fileData){
    if(err){
        console.log(err);
    }
    else{
        console.log(fileData);
    }

});

console.log("The Program ends");

//Notice the output- power of async
//all the async functions are queued. and only when the queue is empty, the program ends.
//all async function will have a callback and each callback will have 2 arguments, one errorand another data

console.log(process.env.npm_package_config_salutation);