/*
  Warnings:

  - Made the column `Client` on table `Testimonial` required. This step will fail if there are existing NULL values in that column.
  - Made the column `Review` on table `Testimonial` required. This step will fail if there are existing NULL values in that column.

*/
-- AlterTable
ALTER TABLE "public"."Testimonial" ALTER COLUMN "Client" SET NOT NULL,
ALTER COLUMN "Review" SET NOT NULL;
