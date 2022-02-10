export class User {
  id = String;
  name = String;
  email = String;
  verifiedEmail = Boolean;
  picture? = String;
  locale? = String;
  accessToken = String;
  tokenType = String;
  expiresIn = Number;
  refreshToken = String;
  idToken = String;
  credentials? = JSON;
  todos? = Array(String);
  notes? = Array(String);
  workspaces? = Array(String);
  createdAt = Date;
}

export interface UserInterface {
  id: string;
  name: string;
  email: string;
  verifiedEmail: boolean;
  picture?: string;
  locale?: string;
  accessToken: string;
  tokenType: string;
  expiresIn: number;
  refreshToken: string;
  idToken: string;
  credentials?: JSON;
  todos?: string[];
  notes?: string[];
  workspaces?: string[];
  createdAt: Date;
}
