/*
  Warnings:

  - The `Social` column on the `About` table would be dropped and recreated. This will lead to data loss if there is data in the column.

*/
-- AlterTable
ALTER TABLE "public"."About" DROP COLUMN "Social",
ADD COLUMN     "Social" TEXT[];
