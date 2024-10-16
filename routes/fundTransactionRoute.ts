import express from "express";
const fundTransactionRoute = express.Router();

import { getAllFundTransactions } from "../controllers/fundTransactionController";

fundTransactionRoute.route("/").get(getAllFundTransactions);

export { fundTransactionRoute };
