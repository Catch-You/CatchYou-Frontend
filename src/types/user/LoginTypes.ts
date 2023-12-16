export type TLogin = {
  email: string;
  password: string;
}

export type TLoginRes = {
  accessToken: string;
  refreshToken: string;
  userId: number;
  accessTokenExpireDate: number;
  userName: string;
  role: string;
}

export type TUserInfo = {
  userName: string;
  role: string;
}