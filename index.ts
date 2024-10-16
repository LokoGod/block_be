import express from "express";
import cors from "cors";
import bodyParser from "body-parser";
import "dotenv/config";

// Import custom routes
// import { proColorRoutes } from "./routes/inventory/proColorRoutes";
// import { proSizeRoutes } from "./routes/inventory/proSizeRoutes";

// Import custom middleware
import { httpStatusCodeHandler } from "./middleware/httpStatusCodeHandler";

// Instances
const app = express();

// Middleware Initialization
app.use(bodyParser.json());
app.use(cors());
app.use(httpStatusCodeHandler);

// API routing
// app.use("/api/v1/proColor", proColorRoutes);
// app.use("/api/v1/proSize", proSizeRoutes);

const port = process.env.PORT || 9000;

// Spin-up server
const start = async () => {
  try {
    app.listen(port, () => {
      console.log(`Server is running on port ${port}`);
    });
  } catch (error) {
    console.log(error);
  }
};

start();
