/*
  Warnings:

  - Added the required column `location` to the `Property` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "public"."Property" ADD COLUMN     "location" TEXT NOT NULL;

-- CreateIndex
CREATE INDEX "Property_location_idx" ON "public"."Property"("location");
