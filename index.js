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
    // console.log("yes");
    // console.log(socket);
    socket.on("callUser",({userToCall,signalData,from,name})=>{
        console.log(userToCall,signalData,from,name);
        io.to(userToCall).emit("callingUser",{signal: signalData,from,name});
    });//to call
    socket.on("answerCall",(data)=>{
        io.to(data.to).emit("callAccepted",data.signal);
    });//to accept call
});
//for message 
io.on("connection",socket=>{
    socket.on("message",({name,message})=>{
        io.emit("message",{name,message})
    })
})

server.listen(PORT, () => console.log("Server listening on Port " + PORT));


