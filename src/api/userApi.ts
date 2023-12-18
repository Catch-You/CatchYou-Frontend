import toast from "react-hot-toast";
import { $axios } from "../lib/axios";
import { TApiResponse } from "../types/commonTypes";
import { TLogin, TLoginRes } from "../types/user/LoginTypes";
import { TEmailCheck, TEmailCode, TSignUp } from "../types/user/SignTypes";
import { authToken } from "../class/authToken";
// import { authToken } from "../class/authToken";

const USER_QUERY_KEYS = {
  EMAIL_DUPLICATE_CHECK: (email: string) => `/signup/email-check/${email}`,
  EMAIL_AUTHENTICATION: (email: string) => `/signup/mail-confirm/${email}`, 
  SIGN_UP: () => '/signup',
  LOGIN: () => '/auth/login',
  RE_TOKEN: () => '/auth/login/reissue',
} as const;

// 이메일 중복체크
export const getEmailCheck = async (email: string) => {
  const res = await $axios.get<TApiResponse<TEmailCheck>>(USER_QUERY_KEYS.EMAIL_DUPLICATE_CHECK(email));
  return res.status;
}

// 이메일 인증
export const getEmailCode = async (email: string) => {
  const res = await $axios.get<TApiResponse<TEmailCode>>(USER_QUERY_KEYS.EMAIL_AUTHENTICATION(email));
  return res.data;
}

// 회원가입
export const postSignUp = async (params: TSignUp) => {
  const res = await $axios.post(USER_QUERY_KEYS.SIGN_UP(), params)
  return res.status;
}

// 로그인
export const postLogin = async (params: TLogin): Promise<{ userName: string; role: string, accessToken: string }> => {
  try {
    const res = await $axios.post(USER_QUERY_KEYS.LOGIN(), params)
    const { accessToken, accessTokenExpireDate, userName, role } = res.data
    setTimeout(getToken, accessTokenExpireDate);
    return { userName, role, accessToken };
  } catch (err) {
    toast.error("로그인 실패");
    throw err;
  }
}

// 토큰 재발급, 자동 새로고침
export const getToken = async () => {
  const res = await $axios.get<TApiResponse<TLoginRes>>(USER_QUERY_KEYS.RE_TOKEN());
  $axios.defaults.headers.common['Authorization'] = `Bearer ${res.data.data.refreshToken}`;
  authToken.setToken(res.data.data.refreshToken)
  return res.data.data.refreshToken; 
}