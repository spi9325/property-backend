/*
  Warnings:

  - You are about to drop the `Template` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropTable
DROP TABLE "public"."Template";

-- CreateTable
CREATE TABLE "public"."BasicData" (
    "id" TEXT NOT NULL,
    "Name" TEXT NOT NULL,
    "Email" TEXT NOT NULL,
    "Age" TEXT NOT NULL,
    "Projects" TEXT NOT NULL,
    "Experience" TEXT NOT NULL,
    "Location" TEXT NOT NULL,
    "Role" TEXT NOT NULL,

    CONSTRAINT "BasicData_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "public"."HeroData" (
    "id" TEXT NOT NULL,
    "Title" TEXT NOT NULL,
    "Tagline" TEXT NOT NULL,
    "Profile" TEXT NOT NULL,
    "Image" TEXT NOT NULL,
    "Email" TEXT NOT NULL,

    CONSTRAINT "HeroData_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "public"."About" (
    "id" TEXT NOT NULL,
    "Bio" TEXT NOT NULL,
    "Social" TEXT NOT NULL,
    "Email" TEXT NOT NULL,

    CONSTRAINT "About_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "public"."Service" (
    "id" TEXT NOT NULL,
    "Service" TEXT,
    "Description" TEXT,
    "Email" TEXT NOT NULL,

    CONSTRAINT "Service_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "public"."Testimonial" (
    "id" TEXT NOT NULL,
    "Client" TEXT,
    "Review" TEXT,
    "Email" TEXT NOT NULL,

    CONSTRAINT "Testimonial_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "BasicData_Email_key" ON "public"."BasicData"("Email");

-- CreateIndex
CREATE UNIQUE INDEX "HeroData_Email_key" ON "public"."HeroData"("Email");

-- CreateIndex
CREATE UNIQUE INDEX "About_Email_key" ON "public"."About"("Email");

-- AddForeignKey
ALTER TABLE "public"."HeroData" ADD CONSTRAINT "HeroData_Email_fkey" FOREIGN KEY ("Email") REFERENCES "public"."BasicData"("Email") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "public"."About" ADD CONSTRAINT "About_Email_fkey" FOREIGN KEY ("Email") REFERENCES "public"."BasicData"("Email") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "public"."Service" ADD CONSTRAINT "Service_Email_fkey" FOREIGN KEY ("Email") REFERENCES "public"."BasicData"("Email") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "public"."Testimonial" ADD CONSTRAINT "Testimonial_Email_fkey" FOREIGN KEY ("Email") REFERENCES "public"."BasicData"("Email") ON DELETE RESTRICT ON UPDATE CASCADE;
