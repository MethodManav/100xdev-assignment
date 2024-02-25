const express= require("express")
const app=express();

app.use(function(req, res, next) {
  res.header("Access-Control-Allow-Origin", "*"); // Update * with the appropriate origin if needed
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  next();
});

app.get("/",(req,res)=>{
  res.send("Hello")
})

app.get("/home",function(req,res){
  const amount=parseInt(req.query.amount);
  const rate=parseInt(req.query.rate)
  const year=parseInt(req.query.year)
  const interest=(amount*rate*year)/100;
  res.send(interest.toString())
});

app.listen(3000)