import { BrowserRouter, Route, Routes } from "react-router-dom";

import MainLayout from "./stories/template/common/MainLayout";
import NoFooterLayout from "./stories/template/common/NoFooterLayout";
import MypageLayout from "./stories/template/common/MypageLayout";
import { MYPAGE_ROUTES } from "./routes/mypageRouter";
import { NOT_LAYOUT_ROUTES } from "./routes/notLayoutRouter";
import { LAYOUT_ROUTES } from "./routes/layoutRouter";
import { RecoilRoot, useRecoilState, useRecoilValue } from "recoil";
import { QueryClient, QueryClientProvider } from "react-query";
import { Suspense, useEffect } from "react";
import { Toaster } from "react-hot-toast";
import { userInfoState, userLoginState, userRoleState, userState } from "./recoil";

function App() {
  return (
    <RecoilRoot>
      <MyComponent />
    </RecoilRoot>
  );
}
  
function MyComponent() {
  // const [userInfo,setUserInfo] = useRecoilState(userInfoState);
  // const [user,setUser] = useRecoilState(userRoleState);
  // const [auth, setAuth] = useRecoilState(userState)
  // const [login, setLogin] = useRecoilState(userLoginState)

  // useEffect(() =>{
  //   setUserInfo({
  //     role: '',
  //     userName: ''
  //   })
  //   setAuth('')
  //   setUser ('');
  //   setLogin(false)
  // },[]
  // )

  
  
  const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      refetchOnWindowFocus: false,
      staleTime: Infinity,
      refetchOnMount: "always",
      retryOnMount: false,
    },
  },
  });

  return (
      <Suspense>
        <QueryClientProvider client={queryClient}>
          <Toaster
            position="top-center"
            toastOptions={{
              style: { padding: "16px", color: "#fff", background: "#5DCF17" },
              duration: 3000,
              error: {
                style: {
                  background: "#FF513E",
                },
              },
            }}
          />
        <BrowserRouter>

        <Routes>
          <Route element={<MainLayout />}>
          {LAYOUT_ROUTES.map((route) => {
            return (
              <Route key={route.name} path={route.path()} element={<route.component />} />
            )
          })}
          </Route>

          <Route element={<NoFooterLayout />}>
            {NOT_LAYOUT_ROUTES.map((route) => {
              return (
                <Route key={route.name} path={route.path()} element={<route.component />} />
              )
            })}
          </Route>
          <Route element={<MypageLayout children={undefined} />}>
            {MYPAGE_ROUTES.map((route) => {
              return (
                <Route key={route.name} path={route.path()} element={<route.component />} />
              )
            })}
          </Route>
        </Routes>
        </BrowserRouter>
        </QueryClientProvider>
        </Suspense>
  )
}

export default App;
