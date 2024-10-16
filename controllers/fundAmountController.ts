import fundAmountRepository from "../repositories/fundAmountRepository";

const getAllFundAmounts = async (req: any, res: any) => {
  try {
    const funds = await fundAmountRepository.getAllFundAmounts();
    res.status(200).json({ funds });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Internal Server Error" });
  }
};

export { getAllFundAmounts };
