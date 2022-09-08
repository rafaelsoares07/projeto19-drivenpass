/*
  Warnings:

  - You are about to drop the column `tagTitle` on the `credentyals` table. All the data in the column will be lost.
  - Added the required column `label` to the `credentyals` table without a default value. This is not possible if the table is not empty.
  - Added the required column `name` to the `credentyals` table without a default value. This is not possible if the table is not empty.
  - Added the required column `title` to the `credentyals` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "credentyals" DROP COLUMN "tagTitle",
ADD COLUMN     "label" TEXT NOT NULL,
ADD COLUMN     "name" TEXT NOT NULL,
ADD COLUMN     "title" TEXT NOT NULL;
