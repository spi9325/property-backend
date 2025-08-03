/*
  Warnings:

  - Made the column `Service` on table `Service` required. This step will fail if there are existing NULL values in that column.
  - Made the column `Description` on table `Service` required. This step will fail if there are existing NULL values in that column.

*/
-- AlterTable
ALTER TABLE "public"."Service" ALTER COLUMN "Service" SET NOT NULL,
ALTER COLUMN "Description" SET NOT NULL;
