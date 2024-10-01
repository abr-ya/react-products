export interface IUserCreatePayload {
  email: string;
  group: string;
  password: string;
}

export interface IUserLoginPayload {
  username: string;
  password: string;
}

export interface IUser {
  details: {
    about?: string;
    avatar?: string;
    id: string;
    email: string;
    username: string;
  };
  isAdmin: boolean;
  token: string;
}
