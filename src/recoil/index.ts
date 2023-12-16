import { atom } from "recoil";

export const userRoleState = atom({
  key: "userRole",
  default: "",
})

export const userLoginState = atom({
  key: "isLoggedIn",
  default: false,
})