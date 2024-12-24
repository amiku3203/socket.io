const socket= io('http://localhost:4000');

// our sovker has an on method and an emit method 

socket.on('welcome',data=>{
    console.log(data);
    //once welcome is emmites;
    socket.emit('thanku',[3,4,5])
})