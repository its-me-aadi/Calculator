const express=require("express");
const bodyParser=require("body-parser");
const app=express();
app.use(bodyParser.urlencoded({extended:true}))
app.get("/",function(request,response){
    response.sendFile(__dirname+ "/calculator.html");
});

app.post("/",function(req,resp){
    var num1=parseInt(req.body.num1);
    var num2=parseInt(req.body.num2);
    var sum=num1+num2
    resp.send(sum);
});

app.listen(3000,function(){
    console.log("Server started");
});  
