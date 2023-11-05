import LoginPage from "../stories/pages/login/LoginPage";
import { TRoute } from "../types/commonTypes";

export const NOT_LAYOUT_ROUTES_URLS = {
  loginPage: {
    name: "로그인 페이지",
    path: () => '/login',
    component: LoginPage,
  }
} as const;

export const NOT_LAYOUT_ROUTES: TRoute[] = Object.values(NOT_LAYOUT_ROUTES_URLS);
