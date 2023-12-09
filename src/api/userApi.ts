import { $axios } from "../lib/axios";
import { TApiResponse } from "../types/commonTypes";
import { TEmailCheck } from "../types/user/SignTypes";

const USER_QUERY_KEYS = {
  EMAIL_DUPLICATE_CHECK: (email: string) => `/signup/email-check/${email}`,
  // EMAIL_AUTHENTICATION: (email: string) => `/signup/mail-confirm/${email}`, 
} as const;

// 이메일 중복체크
export const getEmailCheck = async (email: string) => {
  const res = await $axios.get<TApiResponse<TEmailCheck>>(USER_QUERY_KEYS.EMAIL_DUPLICATE_CHECK(email));
  return res.status;
}

// export const postEmailCode = async (email: string) => {
//   await $axios.post(USER_QUERY_KEYS.EMAIL_AUTHENTICATION(email))
// }