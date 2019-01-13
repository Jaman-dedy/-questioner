const http= require("http");
const app= require("./app");
const port= process.env.PORT || 3000;

//@ server init

const server = http.createServer(app);

//listen
server.listen(port, ()=>{
    console.log(`server is listning on port ${port}`);
})