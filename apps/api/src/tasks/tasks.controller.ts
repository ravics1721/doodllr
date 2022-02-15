import { Controller, Get, Post, Body, Patch, Param, Delete, Res, HttpStatus } from '@nestjs/common';
import { Response } from 'express';
import { TasksService } from './tasks.service';
import { Task as TaskClass, TaskDto, UpdateTaskDto } from '@doodllr/classes';

@Controller('tasks')
export class TasksController {
  constructor(private readonly tasksService: TasksService) {}

  @Post()
  async create(@Body() newTask: TaskDto, @Res() res: Response) {
    const taskData: TaskClass = {
      ...newTask,
      createdAt: new Date(),
      updatedAt: new Date(),
    };
    return await this.tasksService
      .create(taskData)
      .then((result) => {
        res.status(HttpStatus.CREATED).json(result);
      })
      .catch((error) => {
        res.status(HttpStatus.BAD_REQUEST).json(error);
      });
  }

  @Get('all/:wid')
  async findAll(@Param('wid') wid: string, @Res() res: Response) {
    return await this.tasksService
      .findAll(wid)
      .then((result) => {
        res.status(HttpStatus.OK).json(result);
      })
      .catch((err) => {
        res.status(HttpStatus.NOT_FOUND).json(err);
      });
  }

  @Get([':id', ':wid'])
  async findOne(@Param('id') id: string, @Param('wid') wid: string, @Res() res: Response) {
    return await this.tasksService
      .findOne(id, wid)
      .then((result) => {
        res.status(HttpStatus.FOUND).json(result);
      })
      .catch((err) => {
        res.status(HttpStatus.NOT_FOUND).json(err);
      });
  }

  @Patch(':id')
  async update(@Param('id') id: string, @Body() updateTaskDto: UpdateTaskDto, @Res() res: Response) {
    return await this.tasksService
      .update(id, updateTaskDto)
      .then((result) => {
        res.status(HttpStatus.ACCEPTED).json(result);
      })
      .catch((err) => {
        res.status(HttpStatus.CONFLICT).json(err);
      });
  }

  @Delete(':id')
  async remove(@Param('id') id: string, @Res() res: Response) {
    return await this.tasksService
      .remove(id)
      .then((result) => {
        res.status(HttpStatus.OK).json(result);
      })
      .catch((err) => {
        res.status(HttpStatus.CONFLICT).json(err);
      });
  }
}
