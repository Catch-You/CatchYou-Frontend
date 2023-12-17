import { useQuery } from "react-query";
import { getMontagePublic } from "../../../api/montageApi";

export const MONTAGE_QUERY_KEYS = {
  montagePublic: () => ["montagePublic"],
} as const;


export const useGetMontagePublic = (region: string) => {
  return useQuery({
    queryKey: [...MONTAGE_QUERY_KEYS.montagePublic()],
    queryFn: () => getMontagePublic(region),
    select: (res) => res,
  });
}