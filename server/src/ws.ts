import { Server } from "npm:socket.io";

const io = new Server(8001);

io.on("connection", (socket) => {
  console.log("a user connected");

  socket.on("disconnect", () => {
    console.log("user disconnected");
  });

  socket.on("message", (msg) => {
    console.log("message: " + msg);
    io.emit("message", msg);
  });
});

console.log("Socket.IO server running at http://localhost:8001/");
