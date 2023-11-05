import MontagePublicPage from "../stories/pages/montagePublic/MontagePublicPage";
import { TRoute } from "../types/commonTypes";

export const LAYOUT_ROUTES_URLS = {
  montagePublic: {
    name: "몽타주 공개 페이지",
    path: () => '/',
    component: MontagePublicPage,
  },
} as const;

export const LAYOUT_ROUTES: TRoute[] = Object.values(LAYOUT_ROUTES_URLS);
