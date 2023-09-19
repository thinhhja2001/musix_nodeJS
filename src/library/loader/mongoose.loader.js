import mongoose from "mongoose";
import env from "../../config/env.js";
import Logging from "../logging.js";

function mongooseLoader() {
  mongoose
    .connect(env.database.connection || "", {
      retryWrites: true,
      w: "majority",
    })
    .then(() => {
      Logging.info("Connect to database");
    })
    .catch((err) => {
      Logging.error("Unable to connect to Mongo Database");
      Logging.error(err);
    });
}

export default mongooseLoader;