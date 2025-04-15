import express, { json } from "express";

import cors from "cors";
import errorLogger from "./middlewares/error/error-logger";
import errorResponder from "./middlewares/error/error-responder";
import notFound from "./middlewares/not-found";

import { connect } from "./db/mongoose";
import bankRouter from "./routers/bank";

const app = express();

export async function start() {
  await connect();

  app.use(cors());
  app.use(json());

  app.use("/", bankRouter);

  app.use(notFound);

  app.use(errorLogger);

  app.use(errorResponder);
}

export default app;
