/*
  Warnings:

  - The values [boquet] on the enum `ProductType` will be removed. If these variants are still used in the database, this will fail.

*/
-- AlterEnum
BEGIN;
CREATE TYPE "public"."ProductType_new" AS ENUM ('bouquet', 'single_flower');
ALTER TABLE "public"."Product" ALTER COLUMN "type" TYPE "public"."ProductType_new" USING ("type"::text::"public"."ProductType_new");
ALTER TYPE "public"."ProductType" RENAME TO "ProductType_old";
ALTER TYPE "public"."ProductType_new" RENAME TO "ProductType";
DROP TYPE "public"."ProductType_old";
COMMIT;
