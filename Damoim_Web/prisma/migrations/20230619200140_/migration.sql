/*
  Warnings:

  - Added the required column `lat` to the `Meeting` table without a default value. This is not possible if the table is not empty.
  - Added the required column `lng` to the `Meeting` table without a default value. This is not possible if the table is not empty.
  - Added the required column `requestName` to the `Request` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "Meeting" ADD COLUMN     "lat" DOUBLE PRECISION NOT NULL,
ADD COLUMN     "lng" DOUBLE PRECISION NOT NULL;

-- AlterTable
ALTER TABLE "Request" ADD COLUMN     "requestName" TEXT NOT NULL;
