export interface User {
  id: string;
  email: string;
  token: string;
  type: string;
  expireIn: number;
}