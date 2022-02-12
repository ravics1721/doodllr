export enum Status {
  TODO = 'TODO',
  INPROGRESS = 'INPROGRESS',
  DONE = 'DONE',
  TESTING = 'TESTING',
  BACKLOG = 'BACKLOG',
}
export class Task {
  id?: string;
  title!: string;
  description?: string;
  status!: Status;
  createdAt!: Date;
  updatedAt!: Date;
  workspaceId!: string;
  authorId!: string;
  assigneeId?: string;
}
export class TaskDto {
  title!: string;
  description?: string;
  status!: Status;
  createdAt!: Date;
  updatedAt!: Date;
  workspaceId!: string;
  authorId!: string;
  assigneeId?: string;
}
export class UpdateTaskDto {
  title!: string;
  description?: string;
  status!: Status;
  workspaceId?: string;
  assigneeId?: string;
}

export interface TaskInterface {
  id: string;
  title: string;
  description?: string;
  status: Status;
  createdAt: Date;
  updatedAt: Date;
  workspaceId: string;
  authorId: string;
  assigneeId?: string;
}
