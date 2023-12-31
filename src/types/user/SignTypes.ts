export type TEmailCheck = {
  success?: boolean;
  statusCode?: number;
  errorCode?: string;
  reason?: string;
  time?: string;
  path?: string;
  message?: string;
  data?: null | string;
}

export type TEmailCode = {
  message: string;
  data: string;
}

export type TSignUp = {
  email: string;
  name: string;
  password: string;
  role: string;
}