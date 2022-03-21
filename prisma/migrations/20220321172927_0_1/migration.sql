/*
  Warnings:

  - The values [BACKLOG] on the enum `Status` will be removed. If these variants are still used in the database, this will fail.
  - You are about to drop the column `accessToken` on the `User` table. All the data in the column will be lost.
  - You are about to drop the column `expiresIn` on the `User` table. All the data in the column will be lost.
  - You are about to drop the column `idToken` on the `User` table. All the data in the column will be lost.
  - You are about to drop the column `locale` on the `User` table. All the data in the column will be lost.
  - You are about to drop the column `refreshToken` on the `User` table. All the data in the column will be lost.
  - You are about to drop the column `tokenType` on the `User` table. All the data in the column will be lost.
  - You are about to drop the column `verifiedEmail` on the `User` table. All the data in the column will be lost.
  - You are about to drop the column `developerIds` on the `Workspace` table. All the data in the column will be lost.
  - You are about to drop the `_UserToWorkspace` table. If the table is not empty, all the data it contains will be lost.
  - Added the required column `authProvider` to the `User` table without a default value. This is not possible if the table is not empty.

*/
-- CreateEnum
CREATE TYPE "AuthProvider" AS ENUM ('GOOGLE', 'GITHUB', 'LINKEDIN', 'GITLAB');

-- AlterEnum
BEGIN;
CREATE TYPE "Status_new" AS ENUM ('TODO', 'INPROGRESS', 'DONE', 'TESTING', 'DEPLOYED');
ALTER TABLE "Task" ALTER COLUMN "status" DROP DEFAULT;
ALTER TABLE "Task" ALTER COLUMN "status" TYPE "Status_new" USING ("status"::text::"Status_new");
ALTER TYPE "Status" RENAME TO "Status_old";
ALTER TYPE "Status_new" RENAME TO "Status";
DROP TYPE "Status_old";
ALTER TABLE "Task" ALTER COLUMN "status" SET DEFAULT 'TODO';
COMMIT;

-- DropForeignKey
ALTER TABLE "_UserToWorkspace" DROP CONSTRAINT "_UserToWorkspace_A_fkey";

-- DropForeignKey
ALTER TABLE "_UserToWorkspace" DROP CONSTRAINT "_UserToWorkspace_B_fkey";

-- AlterTable
ALTER TABLE "Note" ADD COLUMN     "isPublic" BOOLEAN NOT NULL DEFAULT false;

-- AlterTable
ALTER TABLE "Todo" ADD COLUMN     "isPublic" BOOLEAN NOT NULL DEFAULT false;

-- AlterTable
ALTER TABLE "User" DROP COLUMN "accessToken",
DROP COLUMN "expiresIn",
DROP COLUMN "idToken",
DROP COLUMN "locale",
DROP COLUMN "refreshToken",
DROP COLUMN "tokenType",
DROP COLUMN "verifiedEmail",
ADD COLUMN     "authProvider" "AuthProvider" NOT NULL;

-- AlterTable
ALTER TABLE "Workspace" DROP COLUMN "developerIds",
ADD COLUMN     "members" TEXT[];

-- DropTable
DROP TABLE "_UserToWorkspace";
