import { atom } from "recoil";
import { recoilPersist } from "recoil-persist";

const { persistAtom } = recoilPersist();

export const userRoleState = atom({
  key: "userRole",
  default: "",
})

export const userInfoState = atom({
  key: "userInfo",
  default: {userName: "", role: ""},
  effects_UNSTABLE: [persistAtom],
})

export const userLoginState = atom({
  key: "isLoggedIn",
  default: false,
  effects_UNSTABLE: [persistAtom],
})