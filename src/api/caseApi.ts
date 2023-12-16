import { $axios } from "../lib/axios";
import { TCaseRegist } from "../types/case/caseManage";

const CASE_QUERY_KEYS = {
  CASE_REGIST: () => '/criminal/police',
} as const;

// 사건 등록
export const postCase = async (params: TCaseRegist) => {
  const res = await $axios.post(CASE_QUERY_KEYS.CASE_REGIST(), params);
  console.log("Ddd",res.status)
  return res.data;
}