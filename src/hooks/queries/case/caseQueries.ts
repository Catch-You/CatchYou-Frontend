import { useQuery } from "react-query";
import { getMyCaseList } from "../../../api/caseApi";

export const CASE_QUERY_KEYS = {
  myCase: (role: string) => ["myCaseList", role],
  codeCheck: (code: string) => ["codeCheck", code]
} as const;

// 내가 담당한 사건 리스트 조회
export const useGetMyCaseList = (role: string, auth: string) => {
  return useQuery({
    queryKey: [...CASE_QUERY_KEYS.myCase(role)],
    queryFn: () => getMyCaseList(role, auth),
    select: (res) => res.data
  })
}