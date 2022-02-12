export * from './Note';
export * from './Task';
export * from './User';
export * from './Todo';
export * from './Workspace';
export class ErrorResponse {
  message!: string;
  data!: Error;
}
