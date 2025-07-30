/*
  Warnings:

  - You are about to drop the column `info` on the `Property` table. All the data in the column will be lost.
  - You are about to drop the column `location` on the `Property` table. All the data in the column will be lost.
  - You are about to drop the column `name` on the `Property` table. All the data in the column will be lost.
  - You are about to drop the column `price` on the `Property` table. All the data in the column will be lost.
  - A unique constraint covering the columns `[propertyName]` on the table `Property` will be added. If there are existing duplicate values, this will fail.
  - Added the required column `propertyInfo` to the `Property` table without a default value. This is not possible if the table is not empty.
  - Added the required column `propertyLocation` to the `Property` table without a default value. This is not possible if the table is not empty.
  - Added the required column `propertyName` to the `Property` table without a default value. This is not possible if the table is not empty.
  - Added the required column `propertyPrice` to the `Property` table without a default value. This is not possible if the table is not empty.

*/
-- DropIndex
DROP INDEX "public"."Property_location_idx";

-- DropIndex
DROP INDEX "public"."Property_name_key";

-- AlterTable
ALTER TABLE "public"."Property" DROP COLUMN "info",
DROP COLUMN "location",
DROP COLUMN "name",
DROP COLUMN "price",
ADD COLUMN     "propertyInfo" TEXT NOT NULL,
ADD COLUMN     "propertyLocation" TEXT NOT NULL,
ADD COLUMN     "propertyName" TEXT NOT NULL,
ADD COLUMN     "propertyPrice" DOUBLE PRECISION NOT NULL;

-- CreateIndex
CREATE UNIQUE INDEX "Property_propertyName_key" ON "public"."Property"("propertyName");
