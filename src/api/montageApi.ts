import { $axios } from "../lib/axios";
import { TApiResponse } from "../types/commonTypes";
import { TMontageDetail, TMontagePublic } from "../types/montage/montagePublic";

const MONTAGE_QUERY_KEYS = {
  MONTAGE_PUBLIC: (region: string = "서울") => `/criminal/open?region=${region || "서울"}`,
  MONTAGE_DETAIL: (caseId: number) => `/criminal/open/${caseId}`
} as const;

// 지역별 공개 몽타주 조회
export const getMontagePublic = async (region: string) => {
  const res = await $axios.get<TApiResponse<TMontagePublic>>(MONTAGE_QUERY_KEYS.MONTAGE_PUBLIC(region))
  return res.data;
}

// 공개 몽타주 상세 조회 
export const getMontageDetail = async (caseId: number) => {
  const res = await $axios.get<TMontageDetail>(MONTAGE_QUERY_KEYS.MONTAGE_DETAIL(caseId))
  return res;
}