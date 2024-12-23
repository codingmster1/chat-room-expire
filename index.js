const express = require('express');
const app = express();
const { Server } = require('socket.io');
const http = require('http');
const server = http.createServer(app);
const io = new Server(server);
const port = 5000;
const path = require('path');

app.use(express.static(path.join(__dirname, 'public')));

app.get('/', (req, res) => {
    res.sendFile(__dirname + '/public/index.html');
});

app.get('/anime', (req, res) => {
    res.sendFile(__dirname + '/public/anime.html');
});

app.get('/videogames', (req, res) => {
    res.sendFile(__dirname + '/public/videogames.html');
});

app.get('/dating', (req, res) => {
    res.sendFile(__dirname + '/public/dating.html');
});

app.get('/movies', (req, res) => {
    res.sendFile(__dirname + '/public/movies.html');
});

io.on('connection', (socket) => {
    socket.on('send name', (username) => {
        io.emit('send name', (username));
    });

    socket.on('send message', (chat) => {
        io.emit('send message', (chat));
    });
});

server.listen(port, () => {
    console.log(`Server is listening at the port: ${port}`);
});