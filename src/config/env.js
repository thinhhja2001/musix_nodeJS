import dotenv from "dotenv";
import path from "path";
import * as pkg from "../../package.json" assert { type: "json" };
import {
  getOsEnvOptional,
  getOsEnv,
  normalizePort,
  toBool,
  toNumber,
} from "./os.js";
import { type } from "os";

/**
 * Load .env file or for tests the .env.test, .env.production file.
 */
dotenv.config({
  path: path.join(
    process.cwd(),
    `.env${process.env.NODE_ENV === "test" ? ".test" : ""}`
  ),
});

/**
 * Environment variables
 */

const env = {
  node: process.env.NODE_ENV || "development",
  isProduction: process.env.NODE_ENV === "production",
  isTest: process.env.NODE_ENV === "test",
  isDevelopment: process.env.NODE_ENV === "development",
  app: {
    name: getOsEnv("APP_NAME"),
    version: pkg.version,
    description: pkg.description,
    host: getOsEnv("APP_HOST"),
    schema: getOsEnv("APP_SCHEMA"),
    routePrefix: getOsEnv("APP_ROUTE_PREFIX") || "",
    port: normalizePort(process.env.PORT || getOsEnv("APP_PORT") || "9090"),
    banner: toBool(getOsEnv("APP_BANNER") || "true"),
  },

  log: {
    level: getOsEnv("LOG_LEVEL"),
    json: toBool(getOsEnvOptional("LOG_JSON") || "true"),
    output: getOsEnv("LOG_OUTPUT"),
  },
  database: {
    connection: getOsEnv("DATABASE_URI"),
  },
  jwt: {
    tokenSecret: getOsEnv("TOKEN_SECRET"),
  },
};

export default env;
