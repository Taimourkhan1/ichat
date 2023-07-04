const io = require('socket.io')(3000, {
    cors: {
        origin: ['http://127.0.0.1:5500']
    }
});

const user = {};
io.on('connection', socket => {
  
    socket.on('send', message => {
        socket.broadcast.emit('recieve', { message: message, name: user[socket.id] })
    })
})