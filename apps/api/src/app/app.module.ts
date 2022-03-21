import { Module } from '@nestjs/common';

import { AppController } from './app.controller';
import { AppService } from './app.service';
import { TodosModule } from '../todos/todos.module';
import { TasksModule } from '../tasks/tasks.module';
import { NotesModule } from '../notes/notes.module';
import { UsersModule } from '../users/users.module';
import { AuthModule } from '../auth/auth.module';

@Module({
  imports: [AuthModule, UsersModule, TasksModule, NotesModule, TodosModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
