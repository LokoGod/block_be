import express from "express";
import cors from "cors";
import bodyParser from "body-parser";
import "dotenv/config";

// Import custom routes
import { fundTransactionRoute } from "./routes/fundTransactionRoute";

// Import custom middleware
import { httpStatusCodeHandler } from "./middleware/httpStatusCodeHandler";

// Instances
const app = express();

// Middleware Initialization
app.use(bodyParser.json());
app.use(cors());
app.use(httpStatusCodeHandler);

// API routing
app.use("/api/v1/fundTransactions", fundTransactionRoute);

const port = process.env.PORT || 9000;

app.listen(3001, () => {
  console.log('Server is listening on port 3001');
});

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
