import { collections, connectToDatabase } from "./database";
import { errorHandler } from "./middlewares";
import { userRoutes, blogRoutes } from "./routes";
import app, { BASE_URL, PORT } from "./server";
import { CONSOLE_LOG_SPACER } from "./utils/constants";

connectToDatabase()
  .then(async () => {
    app.use(userRoutes);
    app.use(blogRoutes);
    app.use(errorHandler);

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
