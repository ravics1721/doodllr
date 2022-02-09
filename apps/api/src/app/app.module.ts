import { Module } from '@nestjs/common';

import { AppController } from './app.controller';
import { AppService } from './app.service';
import { TodosModule } from '../todos/todos.module';
import { TasksModule } from '../tasks/tasks.module';
import { NotesModule } from '../notes/notes.module';
import { UsersModule } from '../users/users.module';

@Module({
  imports: [UsersModule, TasksModule, NotesModule, TodosModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
