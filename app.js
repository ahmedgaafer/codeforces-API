var express = require("express");
var app = express();
var request =require('request');


app.set("view engine","ejs");

app.get("/",function(req,res){
   
        request('http://codeforces.com/api/contest.list?gym=false',function(err,response,body){
        if(!err && response.statusCode == 200)
        {
            var data = JSON.parse(body);
            
              res.render("index",{data: data});
           
        }
        else{
            console.log(err+"Hole");
        }
    });
});


app.listen(8080,'localhost',function(){
   console.log("The Codeforces App has Started !!"); 
});