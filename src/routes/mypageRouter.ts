import MyPage from "../stories/pages/my/MyPage";
import { TRoute } from "../types/commonTypes";

export const MYPAGE_ROUTES_URLS = {
  mypage: {
    name: "마이페이지",
    path: () => '/mypage',
    component: MyPage,
  },
} as const;

export const MYPAGE_ROUTES: TRoute[] = Object.values(MYPAGE_ROUTES_URLS);
