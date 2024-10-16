import express from "express";
const fundAmountRoute = express.Router();

import { getAllFundAmounts } from "../controllers/fundAmountController";

fundAmountRoute.route("/").get(getAllFundAmounts);

export { fundAmountRoute };
