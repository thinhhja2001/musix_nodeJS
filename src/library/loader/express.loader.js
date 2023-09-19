import compression from "compression";
import express, { response } from "express";
import helmet from "helmet";
import morgan from "morgan";
import cors from "cors";
import env from "../../config/env.js";
import Logging from "../logging.js";
import HTTP from "../../utils/http.js";
function expressLoader() {
  const app = express();
  // set log request
  app.use(morgan("dev"));

  // set security HTTP headers
  app.use(helmet());

  // parse json request body
  app.use(express.json());

  // parse urlencoded request body
  app.use(express.urlencoded({ extended: true }));

  app.use(compression());

  // set cors blocked resources
  app.use(cors({ exposedHeaders: ["Authorization"] }));

  app.options("*", cors());
  app.listen(env.app.port);
  Logging.info("Server is running on port " + env.app.port);


  return app;
}
export default expressLoader;
