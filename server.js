import { router as _router, create, defaults } from "json-server";

import express from "express";

const server = create();
const router = _router("db.json");
const middlewares = defaults();

server.use(middlewares);
server.use((req, res, next) => {
  setTimeout(next, 500);
});
server.use(router);

const app = express();
app.use(server);

const PORT = 8080;
app.listen(PORT, () => {
  console.log("Server is running on...");
});