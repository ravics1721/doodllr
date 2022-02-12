import { Injectable } from '@nestjs/common';
import { Task as TaskClass, UpdateTaskDto, ErrorResponse } from '@doodllr/classes';
import { PrismaClient, Task, Prisma } from '@prisma/client';

const prisma = new PrismaClient();
@Injectable()
export class TasksService {
  async create(newTask: TaskClass): Promise<Task | ErrorResponse> {
    const taskData: Prisma.TaskCreateInput = {
      ...newTask,
    };
    return await prisma.task
      .create({
        data: taskData,
      })
      .then((result) => {
        return result;
      })
      .catch((err: Prisma.PrismaClientValidationError) => {
        throw {
          message: err.name,
          data: {
            ...err,
            message: err.message,
          },
        };
      });
  }

  async findAll(wId: string) {
    return await prisma.task.findMany({
      where: {
        workspaceId: wId,
      },
    });
  }

  async findOne(id: string, wId: string) {
    return await prisma.task.findFirst({
      where: {
        id: id,
        workspaceId: wId,
      },
    });
  }

  async update(id: string, updateTaskDto: UpdateTaskDto) {
    return await prisma.task.update({
      where: {
        id: id,
      },
      data: {
        ...updateTaskDto,
        updatedAt: new Date(),
      },
    });
  }

  async remove(id: string) {
    return await prisma.task.delete({
      where: {
        id: id,
      },
    });
  }
}
