/*
  Warnings:

  - A unique constraint covering the columns `[Title]` on the table `Skill` will be added. If there are existing duplicate values, this will fail.
  - Added the required column `Title` to the `Skill` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "public"."Skill" ADD COLUMN     "Title" TEXT NOT NULL;

-- CreateIndex
CREATE UNIQUE INDEX "Skill_Title_key" ON "public"."Skill"("Title");
