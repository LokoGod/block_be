import { error } from "console";
import fundTransactionRepository from "../repositories/fundTransactionRepository";

const getAllFundTransactions = async (req: any, res: any) => {
  try {
    const funds = await fundTransactionRepository.getAllFundTransaction();
    res.status(200).json({ funds });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Internal Server Error" });
  }
};

const createFundTransaction = async (req: any, res: any) => {
  const { memberId, monthId, donated_amount, donated_date } = req.body;
  try {
    const createdFund = await fundTransactionRepository.createFundTransaction(
      memberId,
      monthId,
      donated_amount,
      donated_date
    );
    res.status(201).json({ createdFund });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Internal Server Error" });
  }
};

const getFundTransactionsByMonth = async (req: any, res: any) => {
  const monthId = Number(req.params.monthId);

  if (isNaN(monthId) || monthId <= 0) {
    return res.status(400).json({ error: "Invalid monthId" });
  }
  try {
    const transactionsByMonth =
      await fundTransactionRepository.getFundTransactionsByMonth(monthId);
    if (!transactionsByMonth || transactionsByMonth.length === 0) {
      return res
        .status(404)
        .json({ error: "No such month idiot..." });
    }
    res.status(200).json({ transactionsByMonth });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Internal Server Error" });
  }
};

const getFundTransactionsByMember = async (req: any, res: any) => {
  const memberId = Number(req.params.memberId);

  if (isNaN(memberId) || memberId <= 0) {
    return res.status(400).json({ error: "Invalid monthId" });
  }
  try {
    const transactionsByMember =
      await fundTransactionRepository.getFundTransactionsByMember(memberId);
    if (!transactionsByMember || transactionsByMember.length === 0) {
      return res
        .status(404)
        .json({ error: "No such member to be found..." });
    }
    res.status(200).json({ transactionsByMember });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Internal Server Error" });
  }
};

export {
  getAllFundTransactions,
  createFundTransaction,
  getFundTransactionsByMonth,
  getFundTransactionsByMember
};
