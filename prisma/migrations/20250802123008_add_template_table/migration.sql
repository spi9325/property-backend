-- CreateTable
CREATE TABLE "public"."Template" (
    "id" TEXT NOT NULL,
    "Name" TEXT NOT NULL,
    "Email" TEXT NOT NULL,
    "Age" TEXT NOT NULL,
    "Projects" TEXT NOT NULL,
    "Experience" TEXT NOT NULL,
    "Location" TEXT NOT NULL,
    "Role" TEXT NOT NULL,
    "Title" TEXT NOT NULL,
    "Tagline" TEXT NOT NULL,
    "Profile" TEXT NOT NULL,
    "Image" TEXT NOT NULL,
    "Bio" TEXT NOT NULL,
    "Social" TEXT NOT NULL,
    "Service" TEXT NOT NULL,
    "Description" TEXT NOT NULL,
    "Client" TEXT NOT NULL,
    "Review" TEXT NOT NULL,

    CONSTRAINT "Template_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "Template_Name_key" ON "public"."Template"("Name");
