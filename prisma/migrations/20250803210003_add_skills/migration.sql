-- CreateTable
CREATE TABLE "public"."Skill" (
    "id" TEXT NOT NULL,
    "SkillOne" TEXT NOT NULL,
    "SkillTwo" TEXT NOT NULL,
    "SkillThird" TEXT NOT NULL,
    "RatingOne" TEXT NOT NULL,
    "RatingTwo" TEXT NOT NULL,
    "RatingThird" TEXT NOT NULL,
    "Email" TEXT NOT NULL,

    CONSTRAINT "Skill_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "public"."Skill" ADD CONSTRAINT "Skill_Email_fkey" FOREIGN KEY ("Email") REFERENCES "public"."BasicData"("Email") ON DELETE RESTRICT ON UPDATE CASCADE;
