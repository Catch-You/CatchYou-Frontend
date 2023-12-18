import { useRecoilValue } from "recoil";
import SmallSelector from "../../molecules/smallselector";
import { userInfoState, userState } from "../../../recoil";
import { useGetMyCaseList } from "../../../hooks/queries/case/caseQueries";
import Table from "../../atoms/table";
import { useState } from "react";

const MyPage = () => {

  const role = useRecoilValue(userInfoState);
  const auth = useRecoilValue(userState);
  const userRole = role.role === "ROLE_POLICE" ? "police" : "director";
  const [isOpenCase, setIsOpenCase] = useState<boolean | undefined>(undefined);

  // server
  const { data: myCaseList } = useGetMyCaseList(userRole, auth)

  return (
    <div className="flex flex-col mb-20">
    <div className="flex justify-end mt-25"><SmallSelector text="공개여부" options={["공개","비공개"]} setIsOpenCase={setIsOpenCase} isOpenCase={isOpenCase} /></div>
    <>
    {userRole === "police" ? 
    (<>
      <div className="ml-60 text-18 font-semibold mt-20">사건목록</div>
        <div className="ml-60">
          {myCaseList && <Table title={['사건번호', '사건명', '공개여부']} caseList={myCaseList.criminalListDtos} isOpenCase={isOpenCase}/>}
      </div>
    </>): 
    <div className="flex flex-col">
      <div className="ml-60 text-18 font-semibold mt-20">확정된 사건</div>
        <div className="ml-60">
          {myCaseList &&  myCaseList.confirmedCriminalListDtos && <Table title={['사건번호', '사건명', '공개여부']} caseList={myCaseList.confirmedCriminalListDtos} isOpenCase={isOpenCase}/>}
      </div>
      <div className="ml-60 text-18 font-semibold mt-40">미확정된 사건</div>
        <div className="ml-60">
          {myCaseList  && <Table title={['사건번호', '사건명', '공개여부']} caseList={myCaseList.criminalListDtos} isOpenCase={isOpenCase}/>}
      </div>
    </div>
    }    
    </>
    </div>
  )
}

export default MyPage;