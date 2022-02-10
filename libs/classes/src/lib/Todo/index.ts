export class Todo {
  id = String;
  title = String;
  createdAt = Date;
  isDone = Boolean;
  workspaceId = String;
  authorId = String;
}

export interface TodoInterface {
  id: string;
  title: string;
  createdAt: Date;
  isDone: boolean;
  workspaceId: string;
  authorId: string;
}
