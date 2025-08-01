const express = require('express');
const http = require('http');
const { setupWSConnection } = require('y-websocket/bin/utils');
const WebSocket = require('ws');

const app = express();
const server = http.createServer(app);
const wss = new WebSocket.Server({ server });

wss.on('connection', setupWSConnection);

// Enable CORS for Angular dev server
app.use((req, res, next) => {
  res.header('Access-Control-Allow-Origin', '*');
  next();
});

const PORT = process.env.PORT || 3000;
server.listen(PORT, `0.0.0.0`, () => {
  console.log(`WebSocket server running on port ${PORT}`);
});
