import { error } from "console";
import fundTransactionRepository from "../repositories/fundTransactionRepository";

const getAllFundTransactions = async (req: any, res: any) => {
  try {
    const funds = await fundTransactionRepository.getAllFundTransaction();

    const fundTotal = funds.reduce(
      (sum: number, transaction: any) => {
        return sum + transaction.donated_amount;
      },
      0
    );

    // Calculate individual contributions
    const individualContributions = funds.reduce((acc: any, transaction: any) => {
      const memberId = transaction.memberId;
      const memberName = transaction.member.name;

      // Initialize if not already present
      if (!acc[memberId]) {
        acc[memberId] = {
          memberId,
          memberName,
          totalDonated: 0
        };
      }

      // Accumulate the donation amount
      acc[memberId].totalDonated += transaction.donated_amount;

      return acc;
    }, {});

    // Convert the result to an array of contributions
    const contributionsArray = Object.values(individualContributions);

    // Return the data
    res.status(200).json({ funds, fundTotal, individualContributions: contributionsArray })

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
      return res.status(404).json({ error: "No such month idiot..." });
    }

    const totalDonatedAmount = transactionsByMonth.reduce(
      (sum: number, transaction: any) => {
        return sum + transaction.donated_amount;
      },
      0
    );

    const highestDonatedAmount = Math.max(
      ...transactionsByMonth.map(
        (transaction: any) => transaction.donated_amount
      )
    );

    const mvp = transactionsByMonth.find(
      (transaction: any) => transaction.donated_amount === highestDonatedAmount
    )?.member.name;

    res
      .status(200)
      .json({
        transactionsByMonth,
        totalDonatedAmount,
        highestDonatedAmount,
        mvp,
      });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Internal Server Error" });
  }
};

const getAllMonthlyDetails = async (req: any, res: any) => {
  try {
    const monthDetails = await fundTransactionRepository.getAllMonthlyDetails();

    // Calculate the sum of donations for each month
    const monthDetailsWithSum = monthDetails.map((month: any) => {
      // Calculate the sum of donated_amount for each fund in the month
      const totalDonated = month.fundDetails.reduce((sum: number, fund: any) => {
        return sum + fund.donated_amount;
      }, 0);

      return {
        ...month,
        totalDonated, // Add the totalDonated key to the month object
      };
    });

    res.status(200).json({ monthDetails: monthDetailsWithSum });
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
      return res.status(404).json({ error: "No such member to be found..." });
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
  getFundTransactionsByMember,
  getAllMonthlyDetails
};
