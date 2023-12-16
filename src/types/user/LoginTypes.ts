export type TLogin = {
  email: string;
  password: string;
}

export type TLoginRes = {
  accessToken: string;
  refreshToken: string;
  userId: number;
  accessTokenExpireDate: number;
  name: string;
  role: string;
}

export type TUserInfo = {
  name: string;
  role: string;
}