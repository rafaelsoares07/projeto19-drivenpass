/*
  Warnings:

  - Added the required column `label` to the `addresswifi` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "addresswifi" ADD COLUMN     "label" TEXT NOT NULL;
