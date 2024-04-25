-- CreateTable
CREATE TABLE "Registry" (
    "registry_id" SERIAL NOT NULL,
    "document_id" TEXT NOT NULL,
    "date" TIMESTAMP(3) NOT NULL,
    "document_number" TEXT NOT NULL,
    "contract_number" TEXT NOT NULL,
    "item" TEXT NOT NULL,
    "code" TEXT NOT NULL,
    "department" TEXT NOT NULL,
    "activity_project" TEXT NOT NULL,
    "bank_deposit_book" TEXT NOT NULL,
    "received" DOUBLE PRECISION NOT NULL,
    "loan_returned" DOUBLE PRECISION NOT NULL,
    "withdrawal" DOUBLE PRECISION NOT NULL,
    "expense" DOUBLE PRECISION NOT NULL,
    "balance" DOUBLE PRECISION NOT NULL,
    "total_from_bookbang" DOUBLE PRECISION NOT NULL,
    "note" TEXT,

    CONSTRAINT "Registry_pkey" PRIMARY KEY ("registry_id")
);

-- CreateTable
CREATE TABLE "MonthlyTransaction" (
    "transaction_id" SERIAL NOT NULL,
    "code" TEXT NOT NULL,
    "item" TEXT NOT NULL,
    "new_code" TEXT NOT NULL,
    "brought_forward_balance" DOUBLE PRECISION NOT NULL,
    "deposit" DOUBLE PRECISION NOT NULL,
    "withdrawal" DOUBLE PRECISION NOT NULL,
    "loan_repayment_expense" DOUBLE PRECISION NOT NULL,
    "current_balance" DOUBLE PRECISION NOT NULL,

    CONSTRAINT "MonthlyTransaction_pkey" PRIMARY KEY ("transaction_id")
);
