export class Note {
  id = String;
  title = String;
  content = String;
  authorId = String;
  workspaceId = String;
  createdAt = Date;
  updatedAt = Date;
}

export interface NoteInterface {
  id: string;
  title: string;
  content: string;
  authorId: string;
  workspaceId: string;
  createdAt: Date;
  updatedAt: Date;
}
