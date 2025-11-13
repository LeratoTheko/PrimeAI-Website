/*
  Warnings:

  - A unique constraint covering the columns `[email]` on the table `SmeProfile` will be added. If there are existing duplicate values, this will fail.

*/
-- CreateIndex
CREATE UNIQUE INDEX "SmeProfile_email_key" ON "SmeProfile"("email");
