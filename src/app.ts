// ENV variables
require("dotenv").config();

import express from "express";
import config from "config";
import router from "./router";
import db from "../config/db"
import Logger from '../config/logger'
import morganMiddleware from "./middleware/morgan";

const app = express();
const PORT = config.get<number>("port");

// JSON middleware
app.use(express.json());
app.use(morganMiddleware)

// Routes
app.use('/api', router)

app.listen(PORT, async () => {
  await db()
  Logger.info(`Aplicação rodando na porta: ${PORT}`)
}
);
