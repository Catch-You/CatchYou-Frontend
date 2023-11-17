import CaseRegistPage from "../stories/pages/caseRegist/CaseRegistPage";
import EnterCodePage from "../stories/pages/enterCode/EnterCodePage";
import LoginPage from "../stories/pages/login/LoginPage";
import SignMemberPage from "../stories/pages/sign/SignMemberPage";
import SignPage from "../stories/pages/sign/SignPage";
import { TRoute } from "../types/commonTypes";

export const NOT_LAYOUT_ROUTES_URLS = {
  loginPage: {
    name: "로그인 페이지",
    path: () => '/login',
    component: LoginPage,
  },
  signMemberPage: {
    name: "회원 분류 페이지",
    path: () => '/member',
    component: SignMemberPage,
  },
  signPage: {
    name: "회원가입 페이지",
    path: () => '/join',
    component: SignPage,
  },
  enterCodePage: {
    name: "사건코드 입력 페이지",
    path: () => '/incidentCode',
    component: EnterCodePage,
  },
  caseRegisterPage: {
    name: "사건 등록 페이지",
    path: () => '/registerCase',
    component: CaseRegistPage,
  }
} as const;

export const NOT_LAYOUT_ROUTES: TRoute[] = Object.values(NOT_LAYOUT_ROUTES_URLS);
