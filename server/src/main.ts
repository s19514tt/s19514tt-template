import { Hono } from "jsr:@hono/hono";
import "./ws.ts";

const app = new Hono();

app.get("/", (c) => c.text("Hello, Hono!"));

app.get("/api/users", (c) => {
  const users = [
    { id: 1, name: "John Doe" },
    { id: 2, name: "Jane Doe" },
  ];
  return c.json(users);
});

Deno.serve(
  {
    port: 8000,
  },
  app.fetch
);
