import { $axios } from "../lib/axios";
import { TApiResponse } from "../types/commonTypes";
import { TEmailCheck, TEmailCode } from "../types/user/SignTypes";

const USER_QUERY_KEYS = {
  EMAIL_DUPLICATE_CHECK: (email: string) => `/signup/email-check/${email}`,
  EMAIL_AUTHENTICATION: (email: string) => `/signup/mail-confirm/${email}`, 
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