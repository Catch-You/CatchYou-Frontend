// 라우트 type
export type TRoute = {
  name: string;
  path: (params?: string) => string;
  component: () => JSX.Element;
};

// 서버에서 내려주는 응답 구조
export type TApiResponse<T> = {
  status: "success" | "fail";
  code: 200 | 400 | 401 | 403 | 404 | 500;
  message: string;
  data: T;
};