import ws from 'ws';
import {client} from "@repo/db/client";

const wss = new ws.Server({ port: 8080 });

wss.on('connection', (socket) => {
  client.user.findMany().then(users => {
    socket.send(JSON.stringify(users));
  });
  socket.send(JSON.stringify({ message: "Welcome to the WebSocket server!" }));
});