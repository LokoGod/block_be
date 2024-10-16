/*
  Warnings:

  - You are about to drop the `FundAmount` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropForeignKey
ALTER TABLE "FundAmount" DROP CONSTRAINT "FundAmount_memberId_fkey";

-- DropForeignKey
ALTER TABLE "FundAmount" DROP CONSTRAINT "FundAmount_monthId_fkey";

-- DropTable
DROP TABLE "FundAmount";

-- CreateTable
CREATE TABLE "FundTransaction" (
    "id" SERIAL NOT NULL,
    "memberId" INTEGER NOT NULL,
    "monthId" INTEGER NOT NULL,
    "donated_amount" INTEGER NOT NULL,
    "donated_date" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "FundTransaction_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "FundTransaction" ADD CONSTRAINT "FundTransaction_memberId_fkey" FOREIGN KEY ("memberId") REFERENCES "Members"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "FundTransaction" ADD CONSTRAINT "FundTransaction_monthId_fkey" FOREIGN KEY ("monthId") REFERENCES "Months"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
