import CaseDetailPage from "../stories/pages/caseDetail/CaseDetailPage";
import CaseModifyPage from "../stories/pages/caseModify/CaseModifyPage";
import CaseRegistPage from "../stories/pages/caseRegist/CaseRegistPage";
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
  caseRegisterPage: {
    name: "사건 등록 페이지",
    path: () => '/registerCase',
    component: CaseRegistPage,
  },
  caseDetailPage: {
    name: "사건 상세 페이지",
    path: (id = ":id") => `/${id}`,
    component: CaseDetailPage,
  },
  caseModifyPage: {
    name: "사건 수정 페이지",
    path: (id = ":id") => `${id}/modifyCase`,
    component: CaseModifyPage
  }
} as const;

export const NOT_LAYOUT_ROUTES: TRoute[] = Object.values(NOT_LAYOUT_ROUTES_URLS);
