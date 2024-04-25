/*
  Warnings:

  - Added the required column `comment` to the `Registry` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "Registry" ADD COLUMN     "comment" TEXT NOT NULL;
