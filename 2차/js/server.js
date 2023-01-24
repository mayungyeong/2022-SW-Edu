const http = require('http');
const express = require('express');
const app = express();
const cors = require('cors');
const socketio = require('socket.io');

// public 폴더 ststic 설정.
app.use(express.static(__dirname+'/public'));

app.get("/", (req, res)=> {
    res.end("<h1>Hello Nodejs world</h1>");
});

const server = http.createServer(app);
server.listen(3000, ()=>{
    console.log("run on Server : http://localhost:3000");
});

console.log(socketio);
var io = socketio.listen(server);

// 클라이언트 접속이 되면 실행.
io.sockets.on('connection', function(socket) {
    // socket 매개 변수 - 클라이언트 소켓.
    console.log(">>>>> 클라인트 소켓 접속!!!");

    // 보낼 때는 emit
    // socket.emit("news", "hello");

    // 받을 때는 on
    socket.on('client-message', function(data) {
      // console.log("client message: ",data);
      io.sockets.emit('news', data);
    });
    socket.on('message', function(data) {
      // console.log("client message: ",data);
      io.sockets.emit('message', data);
    });
});

/* const http = require('http')
const express = require('express')
const app = express();
const cors = require('cors');
const socketIO = require('socket.io');

// public folder static setting (middleware?)
app.use(express.static('public'));

// with virtual path setting
// app.use('/static', express.static('public'));

app.get("/", (req, res)=>{
    res.end("<h1>Hello Nodejs world</h1>")
});

app.get("/car/list", (req, res)=>{
    res.end("<h1>Car List</h1>")
});

const server = http.createServer(app)
server.listen(3000, ()=>{
    console.log("run on Server : http://localhost:3000")
});

const io = socketIO.listen(server);
// 클라이언트에서 접속되면 실행
io.sockets.on('connection', function(socket) {
    // (param)socket : client socket
    console.log("client socket connect");
}); */