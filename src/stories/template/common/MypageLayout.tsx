import Header from "../../molecules/header"
import { Outlet } from "react-router-dom";

const MypageLayout = () => {
  return (
    <div className="max-w-1440 min-h-screen h-full flex flex-col">
      <Header />
      <div className="flex flex-col flex-grow px-40 bg-mainColor pt-10 pb-50">
        <div className="flex bg-white w-full h-full min-h-600 px-50 mt-30 rounded-20">
          <div className="grid grid-cols-5 py-20">
            <div className="col-span-2 mt-35">
              <div className="text-20 font-semibold">몽타주 전문가(홍길동)</div>
              <div className="h-2 bg-superSubColor w-full mt-5"></div>
              <div className="mt-15">관리사건</div>
            </div>
          <div className="h-full min-h-580 w-2 bg-superSubColor ml-20"></div>
            <div className="col-span-3">
              <Outlet />
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default MypageLayout;