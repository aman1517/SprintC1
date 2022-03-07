const express=require("express");
const app=express();
app.use(logger)
app.get("/books",logger,(req,res)=>{
    return res.send({route:"/books"})
    
})

app.get("/libraries",logger,checkPermission,(req,res)=>{
   return res.send({route:"/libraries",Permissions:req.Permissions})
})
app.get("/author",logger,checkPermission,(req,res)=>{
    return res.send({route:"/author",Permissions:req.Permissions})
 })

function logger(req,res,next){
   if(req.path=="/book"){
       next;
   }
   else if(req.path=="/librarie"){
       next()
   }
   else{
       next()
   }
}
function checkPermission(req,res,next){
    if(req.path=="/librarie"){
        req.Permissions="True"
        next()
    }
    else if(req.Permissions=="/author"){
        req.Permissions="True"
        next()
    }
    else{
        req.Permissions="no";
        next();
    }
}


app.listen(3000,()=>{
    console.log("i am Listing port 3000")
})