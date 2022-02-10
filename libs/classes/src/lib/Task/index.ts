export enum Status {
  TODO = 'TODO',
  INPROGRESS = 'INPROGRESS',
  DONE = 'DONE',
  TESTING = 'TESTING',
  BACKLOG = 'BACKLOG',
}
export class Task {
  id = String;
  title = String;
  description? = String;
  status = Status;
  createdAt = Date;
  updatedAt = Date;
  workspaceId = String;
  authorId = String;
  assigneeId? = String;
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
