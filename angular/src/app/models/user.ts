export interface IUser {
  id: number;
  firstName: string;
  lastName: string;
  email: string;
  active: boolean;
}

export class User {
  constructor(
    public firstName: string,
    public lastName: string,
    public email: string,
  ) {}
}