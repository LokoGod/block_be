-- CreateTable
CREATE TABLE "FundAmount" (
    "id" SERIAL NOT NULL,
    "member" TEXT NOT NULL,
    "donated_amount" INTEGER NOT NULL,
    "donated_date" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "FundAmount_pkey" PRIMARY KEY ("id")
);
