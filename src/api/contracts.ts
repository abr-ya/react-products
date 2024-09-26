export interface IUserCreatePayload {
  email: string;
  group: string;
  password: string;
}

export interface IUserLoginPayload {
  email: string;
  password: string;
}

export interface IUser {
  data: {
    name: string;
    about: string;
    avatar: string;
    _id: string;
    email: string;
    group: string;
  };
  token: string;
}
