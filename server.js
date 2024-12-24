const express= require("express");

const app = express();

app.use(express.static('public'))

const socketio=require("socket.io");


const io= socketio(app.listen(4000),{

})

//emit is anotger
// io event liste
io.on('connect', socket=>{
    console.log(socket.id,"has joind our server")
    socket.emit('welcome',[1,2,4]);

    socket.on('thanku', data=>{
        console.log("messafe from client",data);
    })
})





