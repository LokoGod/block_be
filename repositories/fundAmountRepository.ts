import { PrismaClient } from "@prisma/client";
const prisma = new PrismaClient();

const getAllFundAmounts = async () => {
  return prisma.fundAmount.findMany();
};

const fundAmountRepository = { getAllFundAmounts };

export default fundAmountRepository;
