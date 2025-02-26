const express = require("express");
const http = require("http");
const { Server } = require("socket.io");
const cors = require("cors");

const app = express();
app.use(cors());

const server = http.createServer(app);

const io = new Server(server, {
  cors: {
    origin: "http://localhost:5173",
    methods: ["GET", "POST"],
  },
});

io.on("connection", (socket) => {
  console.log(`User connected: ${socket.id}`);

  // Room handling
  socket.on("join_room", (room) => {
    socket.join(room);
    console.log(`User ${socket.id} joined room ${room}`);
  });

  // Message relay with username
  socket.on("send_message", (data) => {
    console.log(`Message to ${data.room}: ${data.message} from ${data.username}`);
    socket.to(data.room).emit("receive_message", {
      message: data.message,
      username: data.username, // Include username in broadcast
    });
  });

  socket.on("disconnect", () => {
    console.log(`User disconnected: ${socket.id}`);
  });
});

server.listen(3001, () => {
  console.log("Server running on port 3001");
});