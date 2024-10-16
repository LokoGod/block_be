import { PrismaClient } from "@prisma/client";
const prisma = new PrismaClient();

const getAllFundTransaction = async () => {
  return prisma.fundAmount.findMany();
};

const fundTransactionRepository = { getAllFundTransaction };

export default fundTransactionRepository;
