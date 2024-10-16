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

export { getAllFundTransactions };
