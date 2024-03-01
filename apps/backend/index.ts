import express from 'express';
import http from 'http';
import { Server } from 'socket.io';

const PORT = process.env.BACKEND_APP_PORT;

const app = express();
const server = http.createServer(app);
const io = new Server(server, {
  cors: {
    origin: '*',
    methods: '*'
  }
});

app.get('/', (req, res) => {
  res.sendFile(__dirname + '/index.html');
});

// eslint-disable-next-line @typescript-eslint/no-unused-vars
io.on('connection', (socket) => {
  console.log('a user connected');
});

server.listen(PORT, () => {
  console.log(`listening on ${PORT}`);
});
