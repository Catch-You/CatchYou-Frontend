import { atom } from "recoil";

export const userRoleState = atom({
  key: "userRole",
  default: "",
})

export const userInfoState = atom({
  key: "userInfo",
  default: {userName: "", role: ""},
})

export const userLoginState = atom({
  key: "isLoggedIn",
  default: false,
})