import cors from "cors";
import express from "express";

import log from "./src/logger/index.ts";
import connect from "./src/utils/dbconnect.ts";
import routes from "./src/routes/index.ts";

import deserializeUser from "./src/middleware/deserializeUser.ts";

const app = express();
const port = Deno.env.get("PORT");
const base = Deno.env.get("BASE");

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(deserializeUser);

app.listen(port, () => {
  log.info(`[INFO] Server Started on PORT: ${port}`);
  log.info(`Server listening at ${base}`);

  connect();
  routes(app);
});
