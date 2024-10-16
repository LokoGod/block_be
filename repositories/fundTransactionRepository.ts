import { PrismaClient } from "@prisma/client";
const prisma = new PrismaClient();

const getAllFundTransaction = async () => {
  return prisma.fundTransaction.findMany({
    include: { member: true, month: true },
  });
};

const createFundTransaction = async (
  memberId: number,
  monthId: number,
  donated_amount: number,
  donated_date: Date
) => {
  const fundTransaction = await prisma.fundTransaction.create({
    data: {
      memberId,
      monthId,
      donated_amount,
      donated_date,
    },
  });
  return fundTransaction;
};

const fundTransactionRepository = {
  getAllFundTransaction,
  createFundTransaction,
};

export default fundTransactionRepository;
