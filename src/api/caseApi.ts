import { $axios } from "../lib/axios";
import { TCaseDetail, TCaseRegist } from "../types/case/caseManage";
import { TApiResponse } from "../types/commonTypes";


const CASE_QUERY_KEYS = {
  CASE_REGIST: () => '/criminal/police',
  CASE_DETAIL: (id: number) => `/criminal/police/${id}`
} as const;

// 사건 등록
export const postCase = async (params: TCaseRegist, auth: string) => {
  console.log("함부자", auth);
  return $axios.post(CASE_QUERY_KEYS.CASE_REGIST(), params, {
    headers: {
      Authorization: `Bearer ${auth}`,
    },
  });
};


// 사건 상세 조회
export const getCaseDetail = async (id: number) => {
  const res = await $axios.get<TApiResponse<TCaseDetail>>(CASE_QUERY_KEYS.CASE_DETAIL(id))
  return res.data;
}