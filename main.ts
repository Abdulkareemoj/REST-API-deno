// import cors from "cors"
// @deno-types="npm:@types/express@4.17.15"
import express from "express";

// import dotenv from 'dotenv'
import log from "./src/logger/index.ts";
import connect from "./src/utils/dbconnect.ts";
import routes from "./src/routes/index.ts";
// dotenv.config({ path: './config/.env' })
import deserializeUser from "./src/middleware/deserializeUser.ts";

const app = express();
const port = process.env.PORT;
const base = process.env.BASE;

// app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(deserializeUser);

app.listen(port, () => {
  log.info(`[INFO] Server Started on PORT: ${port}`);
  log.info(`Server listening at ${base}`);

  connect();
  routes(app);
});
