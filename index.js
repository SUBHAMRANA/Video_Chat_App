const app = require("express")();
const server = require("http").createServer(app);//built in node module

const cors = require("cors");//for cross origin request abd to deploy our app

const io = require("socket.io")(server,{
    cors:{
       origin: "*",
       methods: ["GET","POST"]
    }
});

app.use(cors());

const PORT = process.env.PORT || 5000;

app.get("/",(req,res)=>{
    res.send("Server is running. ");
});
//socket connection for real time calling
io.on("connection",(socket)=>{
    socket.emit("me", socket.id); //i am calling

    socket.on("disconnect",()=>{
        socket.broadcast.emit("callended");//when call ended
    });

    socket.on("calluser",({userToCall,signalData,from,name})=>{
        io.to(userToCall).emit("calluser",{signal: signalData,from,name});
    });//to call
    socket.on("answercall",(data)=>{
        io.to(data.to).emit("callaccepted",data.signal);
    });//to accept call
});

server.listen(PORT, () => console.log("Server listening on Port " + PORT));


