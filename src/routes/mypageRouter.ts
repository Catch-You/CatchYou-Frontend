import MontageCreatePage from "../stories/pages/montageCreate/MontageCreatePage";
import MontageFirmUp from "../stories/pages/montageFirmUp/MontageFirmUpPage";
import MyCaseDirectorPage from "../stories/pages/my/MyCaseDirectorPage";
import MyCasePolicePage from "../stories/pages/my/MyCasePolicePage";
import MyPage from "../stories/pages/my/MyPage";
import { TRoute } from "../types/commonTypes";

export const MYPAGE_ROUTES_URLS = {
  mypage: {
    name: "마이페이지",
    path: () => '/my',
    component: MyPage,
  },
  createMontage: {
    name: "몽타주 생성페이지",
    path: () => '/createMontage',
    component: MontageCreatePage,
  },
  firmUpMontage: {
    name: "몽타주 확정페이지",
    path: () => '/firmUpMontage',
    component: MontageFirmUp,
  },
  MyCasePolicePage: {
    name: "담당 사건 상세 페이지 (경찰)",
    path: (id = ":id") => `/my/police/${id}`,
    component: MyCasePolicePage,
  },
  MyCaseDirectorPage: {
    name: "담당 사건 상세 페이지 (몽타주 전문가)",
    path: (id = ":id") => `/my/director/${id}`,
    component: MyCaseDirectorPage,
  }
} as const;

export const MYPAGE_ROUTES: TRoute[] = Object.values(MYPAGE_ROUTES_URLS);
