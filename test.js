console.log("hello");
console.log(process.env.service);
var fs = require('fs');
var tergetString = `http:\/\/${process.env.service}:8080\/employee`;
console.log(tergetString);


        fs.readFile('proxy.conf.json', function readFileCallback(err, data){
        if (err){
            console.log(err);
        } else {
        obj = JSON.parse(data);
obj['/api/*']['target'] = tergetString;
console.log(obj['/api/*']['target']);
 var json = JSON.stringify(obj); 
        fs.writeFile('proxy.conf.json', json);
       
       }
});

