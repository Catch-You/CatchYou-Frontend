import { TRoute } from "../types/commonTypes";
import MontagePublicPage from "../stories/pages/montagePublic/MontagePublicPage";
/*
  Header, footer의 layout이 필요한 페이지
  라우트할 페이지의 path, component
*/

export const LAYOUT_ROUTES_URL = {
  montagePublic: {
    name: "몽타주 공개 페이지",
    path: () => "/",
    component: MontagePublicPage
  },
} as const;

export const LAYOUT_ROUTES: TRoute[] = Object.values(LAYOUT_ROUTES_URL);