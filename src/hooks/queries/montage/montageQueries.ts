import { useQuery } from "react-query";
import { getMontageDetail, getMontagePublic } from "../../../api/montageApi";

export const MONTAGE_QUERY_KEYS = {
  montagePublic: () => ["montagePublic"],
  montageDetail: (caseId: number) => ["montageDetail",caseId],
} as const;

// 지역별 공개 몽타주 조회
export const useGetMontagePublic = (region: string) => {
  return useQuery({
    queryKey: [...MONTAGE_QUERY_KEYS.montagePublic()],
    queryFn: () => getMontagePublic(region),
    select: (res) => res,
  });
}

// 몽타주 상세 조회
export const useGetMontageDetail = (caseId: number) => {
  return useQuery({
    queryKey: [...MONTAGE_QUERY_KEYS.montageDetail(caseId)],
    queryFn: () => getMontageDetail(caseId),
    select: (res) => res.data, 
  });
}