import expressLoader from "./library/loader/express.loader.js";
import mongooseLoader from "./library/loader/mongoose.loader.js";
import Logging from "./library/logging.js";

async function initApp() {
  mongooseLoader();
  const app = expressLoader();
}

initApp()
  .then(Logging.info("App running"))
  .catch((error) => Logging.error("Application crashed: " + error));
