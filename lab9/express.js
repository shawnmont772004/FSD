const express=require('express');
const port=1789;
const app=express();
app.get('/',(req,res)=>{
    res.send("Hello world\n");
})
app.listen(port,()=>{
    console.log(`Server running in localhost://${port}`);
})