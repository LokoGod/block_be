import express from "express";
const fundTransactionRoute = express.Router();

import { getAllFundTransactions, createFundTransaction } from "../controllers/fundTransactionController";

fundTransactionRoute.route("/").get(getAllFundTransactions).post(createFundTransaction);

export { fundTransactionRoute };
