/*
  Warnings:

  - You are about to drop the column `member` on the `FundAmount` table. All the data in the column will be lost.
  - Added the required column `memberId` to the `FundAmount` table without a default value. This is not possible if the table is not empty.
  - Added the required column `monthId` to the `FundAmount` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "FundAmount" DROP COLUMN "member",
ADD COLUMN     "memberId" INTEGER NOT NULL,
ADD COLUMN     "monthId" INTEGER NOT NULL;

-- CreateTable
CREATE TABLE "Members" (
    "id" SERIAL NOT NULL,
    "name" TEXT NOT NULL,

    CONSTRAINT "Members_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Months" (
    "id" SERIAL NOT NULL,
    "month_title" TEXT NOT NULL,

    CONSTRAINT "Months_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "FundAmount" ADD CONSTRAINT "FundAmount_memberId_fkey" FOREIGN KEY ("memberId") REFERENCES "Members"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "FundAmount" ADD CONSTRAINT "FundAmount_monthId_fkey" FOREIGN KEY ("monthId") REFERENCES "Months"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
