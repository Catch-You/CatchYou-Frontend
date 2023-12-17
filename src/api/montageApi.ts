import { $axios } from "../lib/axios";
import { TApiResponse } from "../types/commonTypes";
import { TMontagePublic } from "../types/montage/montagePublic";

const MONTAGE_QUERY_KEYS = {
  MONTAGE_PUBLIC: (region: string = "서울") => `/criminal/open?region=${region || "서울"}`,
} as const;

export const getMontagePublic = async (region: string) => {
  const res = await $axios.get<TApiResponse<TMontagePublic>>(MONTAGE_QUERY_KEYS.MONTAGE_PUBLIC(region))
  return res.data;
}