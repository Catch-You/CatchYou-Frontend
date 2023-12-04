import { HTMLAttributes, ReactNode } from "react";
import Header from "../../molecules/header"
import { Outlet } from "react-router-dom";

interface Props extends HTMLAttributes<HTMLDivElement> {
  children: ReactNode;
}

const MypageLayout: React.FC<Props> = ({ ...props }) => {
  return (
    <div className="max-w-1440 min-h-screen h-full flex flex-col" {...props}>
      <Header />
      <div className="flex flex-wrap flex-col px-70 bg-mainColor pt-10 pb-50">
        <div className="bg-white h-full min-h-600 px-40 mt-20 rounded-20 ">
          <div className="flex py-20 w-full">
            <div className="mt-35 w-250">
              <div className="text-20 font-semibold">몽타주 전문가(홍길동)</div>
              <div className="h-2 bg-superSubColor w-full mt-5"></div>
              <div className="mt-15">관리사건</div>
            </div>
            <div className="h-full min-h-580 w-2 bg-superSubColor ml-20"> </div>
            <Outlet />
        </div>
      </div>
      </div>
    </div>
  )
}

export default MypageLayout;