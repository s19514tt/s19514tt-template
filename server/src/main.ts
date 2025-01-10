import { Hono } from "jsr:@hono/hono";
import "./ws.ts";
// import { config } from "https://deno.land/x/dotenv@v3.2.2/mod.ts";
// const env = config();

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

// import { MongoClient } from "jsr:@db/mongo";
// const client = new MongoClient();
// await client.connect(`mongodb://root:${PASSWORD}@localhost:27017`);
