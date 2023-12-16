import toast from "react-hot-toast";
import { $axios } from "../lib/axios";
import { TApiResponse } from "../types/commonTypes";
import { TLogin, TLoginRes } from "../types/user/LoginTypes";
import { TEmailCheck, TEmailCode, TSignUp } from "../types/user/SignTypes";

const USER_QUERY_KEYS = {
  EMAIL_DUPLICATE_CHECK: (email: string) => `/signup/email-check/${email}`,
  EMAIL_AUTHENTICATION: (email: string) => `/signup/mail-confirm/${email}`, 
  SIGN_UP: () => '/signup',
  LOGIN: () => '/auth/login',
  RE_TOKEN: () => '/auth/reissue',
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
export const postLogin = async (params: TLogin) => {
  const res = await $axios.post(USER_QUERY_KEYS.LOGIN(), params)

  try {
    const { accessToken } = res.data.accessToken;
    const { accessTokenExpireDate } = res.data.accessTokenExpireDate
    // API 요청하는 콜마다 헤더에 accessToken 담아 보내도록 설정
    $axios.defaults.headers.common['Authorization'] = `Bearer ${accessToken}`;
    setTimeout(getToken, (accessTokenExpireDate - 60) * 1000);
  } catch (err) {
    toast.error("로그인 실패")
  }
  return res.data;
}

// 토큰 재발급, 자동 새로고침
export const getToken = async () => {
  const res = await $axios.get<TApiResponse<TLoginRes>>(USER_QUERY_KEYS.RE_TOKEN());
  if (res.data.code !== 200) {
    toast.error("토큰 재발급 실패")
  } 
  return res.data;
}