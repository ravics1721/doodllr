-- DropForeignKey
ALTER TABLE "Task" DROP CONSTRAINT "Task_assigneeId_fkey";

-- DropForeignKey
ALTER TABLE "Task" DROP CONSTRAINT "Task_workspaceId_fkey";

-- AlterTable
ALTER TABLE "User" ADD COLUMN     "assigned" TEXT[];

-- AlterTable
ALTER TABLE "Workspace" ADD COLUMN     "tasks" TEXT[];
