import { $axios } from "../lib/axios";
import { TCaseForm, TCaseModifyForm } from "../types/case/caseList";
import { TCaseDetail, TMyCaseList } from "../types/case/caseManage";
import { TApiResponse } from "../types/commonTypes";


const CASE_QUERY_KEYS = {
  CASE_REGIST: () => '/criminal/police',
  CASE_MODIFY: (caseId: number) => `/criminal/police/${caseId}`,
  CASE_DETAIL: (id: number) => `/criminal/police/${id}`,
  MY_CASE: (role: string) => `/criminal/${role}/myList`,
  CASE_CODE: (code: string) => `/criminal/director/confirm-code/${code}`,
  INTERVIEW_CREATE: (caseId: number) => `/interview/${caseId}`
} as const;

// 사건 등록
export const postCase = async (params: TCaseForm, auth: string) => {
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

// 사건 수정
export const putCase = async (params: TCaseModifyForm, caseId: number, auth: string) => {
  const res = await $axios.put(CASE_QUERY_KEYS.CASE_MODIFY(caseId), params, {
    headers: {
      Authorization: `Bearer ${auth}`,
    }
  })
  if (res.status == 200) {
    return res.data;
  }
  if (!res.data.success) {
    throw new Error(res.data.reason);
  }
}

// 내가 담당한 사건 리스트 조회
export const getMyCaseList = async (role: string, auth: string) => {
  const res = await $axios.get<TMyCaseList>(CASE_QUERY_KEYS.MY_CASE(role), {
    headers: {
      Authorization: `Bearer ${auth}`,
    }
  });
  return res;
}

// 사건 코드 유효성 검사
export const postCaseCode = async (code: string, auth: string) => {
  const res = await $axios.post(CASE_QUERY_KEYS.CASE_CODE(code), code, {
    headers: {
      Authorization: `Bearer ${auth}`,
    }
  });
  if (res.status == 200) {
    return res.data;
  }
  if (!res.data.success) {
    throw new Error(res.data.reason);
  }
}

// 사건 인터뷰 생성 (몽타주 제작~재생성)
export const postInterviewCreate = async (caseId: number, auth: string) => {
  const res = await $axios.post(CASE_QUERY_KEYS.INTERVIEW_CREATE(caseId), caseId, {
    headers: {
      Authorization: `Bearer ${auth}`,
    }
  });
  return res.data;
}