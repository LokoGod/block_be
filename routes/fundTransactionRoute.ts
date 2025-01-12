import express from "express";
const fundTransactionRoute = express.Router();

import { getAllFundTransactions, createFundTransaction,getFundTransactionsByMonth, getFundTransactionsByMember, getAllMonthlyDetails } from "../controllers/fundTransactionController";

fundTransactionRoute.route("/").get(getAllFundTransactions).post(createFundTransaction);
fundTransactionRoute.route("/months").get(getAllMonthlyDetails)
fundTransactionRoute.route("/month/:monthId").get(getFundTransactionsByMonth)
fundTransactionRoute.route("/member/:memberId").get(getFundTransactionsByMember)
// Here you go

export { fundTransactionRoute };
