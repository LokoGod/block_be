import express from "express";
const fundTransactionRoute = express.Router();

import { getAllFundTransactions, createFundTransaction,getFundTransactionsByMonth, getFundTransactionsByMember } from "../controllers/fundTransactionController";

fundTransactionRoute.route("/").get(getAllFundTransactions).post(createFundTransaction);
fundTransactionRoute.route("/month/:monthId").get(getFundTransactionsByMonth)
fundTransactionRoute.route("/member/:memberId").get(getFundTransactionsByMember)

export { fundTransactionRoute };
