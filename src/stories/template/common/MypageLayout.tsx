import { HTMLAttributes, ReactNode } from "react";
import Header from "../../molecules/header"
import { Outlet } from "react-router-dom";
import { useRecoilValue } from "recoil";
import { userInfoState } from "../../../recoil";

interface Props extends HTMLAttributes<HTMLDivElement> {
  children: ReactNode;
}

const MypageLayout: React.FC<Props> = ({ ...props }) => {
  const userInfo = useRecoilValue(userInfoState); 
  const role = userInfo.role === 'ROLE_POLICE' ? '경찰':'몽타주 전문가'
  
  return (
    <div className="max-w-1440 min-h-screen h-full flex flex-col" {...props}>
      <Header />
      <div className="flex flex-wrap flex-col px-70 bg-mainColor pt-10 pb-50 ">
        <div className="bg-white h-full min-h-580 max-h-600 px-40 mt-20 rounded-20 overflow-auto">
          <div className="flex py-20 w-full">
            <div className="mt-35 w-250">
              <div className="text-20 font-semibold">{role} / {userInfo.userName}님</div>
              <div className="h-2 bg-superSubColor w-full mt-5"></div>
              {role === '경찰'? (
                <div className="mt-20 flex flex-col gap-4">
                  <div>관리사건</div>
                  <a href='/registerCase'>사건등록</a>
                </div>) : 
                (<div className="mt-20 flex flex-col gap-4">
                  <div>관리사건</div>
                  <a href='/createMontage'>몽타주 생성</a>
                </div>)}
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