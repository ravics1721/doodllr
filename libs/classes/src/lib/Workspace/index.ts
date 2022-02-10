export class Workspace {
  id = String;
  name = String;
  description? = String;
  createdAt = Date;
  authorId = String;
  developerIds = Array(String);
  notes = Array(String);
  tasks = Array(String);
  todos = Array(String);
}

export interface WorkspaceInterface {
  id: string;
  name: string;
  description?: string;
  createdAt: Date;
  authorId: string;
  developerIds: string[];
  notes: string[];
  tasks: string[];
  todos: string[];
}
