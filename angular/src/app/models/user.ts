export interface IUser {
  firstName: string;
  lastName: string;
  email: string;
  active: boolean;
  fourteenerArray: any[];
}

export class User {
  constructor(
    public firstName: string,
    public lastName: string,
    public email: string,
  ) {}
}