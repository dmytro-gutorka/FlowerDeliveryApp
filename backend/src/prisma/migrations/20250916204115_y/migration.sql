/*
  Warnings:

  - Added the required column `imageSnapshot` to the `OrderItem` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "public"."OrderItem" ADD COLUMN     "imageSnapshot" TEXT NOT NULL;
