import { BrowserRouter, Route, Routes } from "react-router-dom";

import MainLayout from "./stories/template/common/MainLayout";
import NoFooterLayout from "./stories/template/common/NoFooterLayout";
import MypageLayout from "./stories/template/common/MypageLayout";
import { MYPAGE_ROUTES } from "./routes/mypageRouter";
import { NOT_LAYOUT_ROUTES } from "./routes/notLayoutRouter";
import { LAYOUT_ROUTES } from "./routes/layoutRouter";

import { RecoilRoot, useRecoilValue } from "recoil";
import { QueryClient, QueryClientProvider } from "react-query";
import { Suspense, useEffect } from "react";
import toast, { Toaster } from "react-hot-toast";
import { userLoginState } from "./recoil";
import { getToken } from "./api/userApi";

function App() {
  return (
    <RecoilRoot>
      <MyComponent />
    </RecoilRoot>
  );
}
  
function MyComponent() {
  const isLoggedIn = useRecoilValue(userLoginState);

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

  // 로그인 상태에서 어플리케이션이 마운트 될 때 retoken 호출
  useEffect(() => {
    if (isLoggedIn) {
      getToken();
    }
  }, []);

  return (
      <Suspense fallback={toast.loading("로딩 중...")}>
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
