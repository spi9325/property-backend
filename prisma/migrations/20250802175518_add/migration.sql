/*
  Warnings:

  - A unique constraint covering the columns `[Email]` on the table `Service` will be added. If there are existing duplicate values, this will fail.
  - A unique constraint covering the columns `[Email]` on the table `Testimonial` will be added. If there are existing duplicate values, this will fail.

*/
-- CreateIndex
CREATE UNIQUE INDEX "Service_Email_key" ON "public"."Service"("Email");

-- CreateIndex
CREATE UNIQUE INDEX "Testimonial_Email_key" ON "public"."Testimonial"("Email");
