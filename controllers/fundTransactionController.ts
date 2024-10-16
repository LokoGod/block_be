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
    console.error(error)
    res.status(500).json({error: "Internal Server Error"})
  }
};

export { getAllFundTransactions, createFundTransaction };
