export interface IToken {
  token: string;
}

export interface IAccessRefreshTokens {
  accessToken?: IToken;
}

export interface IUser {
  _id?: string;
  name?: string;
  surname?: string;
  login?: string;
  password?: string;
}
