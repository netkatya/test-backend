/*
  Warnings:

  - You are about to drop the column `message` on the `Application` table. All the data in the column will be lost.
  - You are about to drop the column `name` on the `Application` table. All the data in the column will be lost.
  - Added the required column `amount` to the `Application` table without a default value. This is not possible if the table is not empty.
  - Added the required column `propertyId` to the `Application` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "Application" DROP COLUMN "message",
DROP COLUMN "name",
ADD COLUMN     "amount" INTEGER NOT NULL,
ADD COLUMN     "propertyId" INTEGER NOT NULL;

-- CreateTable
CREATE TABLE "Property" (
    "id" SERIAL NOT NULL,
    "title" TEXT NOT NULL,
    "price" INTEGER NOT NULL,
    "yield" DOUBLE PRECISION NOT NULL,
    "daysLeft" INTEGER NOT NULL,
    "soldPercent" INTEGER NOT NULL,
    "imageUrl" TEXT,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "Property_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "Application" ADD CONSTRAINT "Application_propertyId_fkey" FOREIGN KEY ("propertyId") REFERENCES "Property"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
