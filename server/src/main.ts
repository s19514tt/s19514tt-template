import { Hono } from "hono";
import { serve } from "@hono/node-server";

const app = new Hono();

app.get("/", (c) => c.text("Hello, Hono!"));

app.get("/api/users", (c) => {
  const users = [
    { id: 1, name: "John Doe" },
    { id: 2, name: "Jane Doe" },
  ];
  return c.json(users);
});

serve({
  fetch: app.fetch,
  port: 8000,
});
