import { Server } from "npm:socket.io";
import {
  ClientToServerEvents,
  ServerToClientEvents,
} from "./shared-types/ws.ts";

const io = new Server<ServerToClientEvents, ClientToServerEvents>(8001);

io.on("connection", (socket) => {
  console.log("a user connected");

  socket.on("disconnect", () => {
    console.log("user disconnected");
  });

  socket.on("messageToClient", (message) => {
    console.log("message: " + message);
  });
});

console.log("Socket.IO server running");
