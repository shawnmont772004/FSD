const http= require('http');
const port=2039;
const hostname='127.0.0.1';
const server=http.createServer((req,res)=>{
    res.writeHead(200,{"Content-Type":"text/plain"});
    res.send("Hello World\n");
})
server.listen(port,hostname,()=>{
    console.log(`Server is running at http://${hostname} at port ${port}`);
})