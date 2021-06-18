import React,{createContext,useState,useRef,useEffect} from "react";

import Peer from "simple-peer";
import {io} from "socket.io-client";

//socket for peer connection

const SocketContext=createContext();
//this is our local server
const socket=io("https://Localhost:5000");

//this will provided all the services required in video call
const ContextProvider=({children})=>{
    const [stream,setStream]=useState(null);
    const [me,setMe]=useState("");
    const [call,setCall]=useState({});
    const[callAccepted,setCallAccepted]=useState(false);
    const [callEnded,setCallEnded]=useState(false);
    const [name,setName]=useState("");
    const myVideo= useRef();
    const userVideo= useRef();
    
    const connectionRef=useRef();
    useEffect(()=>{
        navigator.mediaDevices.getUserMedia({video: true,audio: true})
        .then((currentStream)=>{
            setStream(currentStream);

            myVideo.current.srcObject=currentStream;
        });
         socket.on('me',(id)=>setMe(id));
          socket.on('calluser',({from,name: callerName,signal})=>{
              setCall({isReceived:true,from,name:callerName,signal})
          });
        },[]);//empty array to break the call loop

//response.
 //function to answer the call
const answerCall=()=>{
    //set it to true
    setCallAccepted(true)
    
    //it will perform some action when we accept call
    const peer=new Peer({initiator:false,trickle:false,stream});
    
    //call back function
    peer.on('signal',(data)=>{
        socket.emit("answercall",{signal:data,to: call.from});
    })

    //it will control stream
    peer.on("stream",(currentStream)=>{
        userVideo.current.srcObject=currentStream;
    });

    peer.signal(call.signal);

    connectionRef.current = peer;
}

    //function to call user

    const callUser=(id)=>{
        //it will perform some action when we call
       const peer=new Peer({initiator:true,trickle:false,stream});

       peer.on('signal',(data)=>{
        socket.emit("calluser",{userToCall: id,signalData:data,from:me,name});
    });

    //it will control stream
    peer.on("stream",(currentStream)=>{
        userVideo.current.srcObject=currentStream;
    });
    socket.on('callaccepted',(signal)=>{
        setCallAccepted(true);

        peer.signal(signal);
    });
    connectionRef.current = peer;

    }
    
   //function when call is ended

   const leaveCall=()=>{
       setCallEnded(true);

       //when we ended connection ref must get destroy

       connectionRef.current.destroy();

       //after we should reload the package
       window.location.reload();

   }
   // to retun after the call is done
   return (
       //return everthing which is used
       <SocketContext.Provider value={{
        call,
        callAccepted,
        myVideo,
        userVideo,
        stream,
        name,
        setName,
        callEnded,
        me,
        callUser,
        leaveCall,
        answerCall,
       }}>
       {
           children
       }
       </SocketContext.Provider>
   )
}
export {ContextProvider,SocketContext};

