import morgan from "morgan";
import app, { BASE_URL, PORT } from "./server";
import { collections, connectToDatabase } from "./database";
import { userRoutes } from "./routes";
import { CONSOLE_LOG_SPACER, logResults, sampleUserData } from "./utils";
import { createUser } from "./controllers";
import { errorHandler } from "./middlewares";

connectToDatabase()
  .then(async () => {
    app.use(userRoutes);
    app.use(errorHandler);

    /**
     *
     * **************************************************
     * MORGAN
     * **************************************************
     */
    app.use(morgan("tiny"))
    app.use(morgan(":method :status :url'HTTP/:http-version'"))
    
    app.listen(PORT, async () => {
      console.log(`server running on ${BASE_URL}`);
    });

    console.log(
      "===================================================================================="
    );
    console.log("DISPLAY RESULTS");
    console.log(
      "===================================================================================="
    );
    console.log(CONSOLE_LOG_SPACER);
  })
  .catch((error: Error) => {
    console.error("Database connection failed", error);
    process.exit();
  });