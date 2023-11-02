// 라우트 type
export type TRoute = {
  name: string;
  path: (params?: string) => string;
  component: () => JSX.Element;
}