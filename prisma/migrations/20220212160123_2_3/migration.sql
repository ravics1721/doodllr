/*
  Warnings:

  - Made the column `workspaceId` on table `Task` required. This step will fail if there are existing NULL values in that column.

*/
-- AlterTable
ALTER TABLE "Task" ALTER COLUMN "workspaceId" SET NOT NULL;
