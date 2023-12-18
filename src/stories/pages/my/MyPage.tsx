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
  const [isOpenCase, setIsOpenCase] = useState(false);

  // server
  const { data: myCaseList } = useGetMyCaseList(userRole, auth)

  return (
    <div className="flex flex-col">
    <div className="flex justify-end"><SmallSelector text="공개여부" options={["공개","비공개"]} setIsOpenCase={setIsOpenCase} isOpenCase={isOpenCase} /></div>
    <div className="ml-60 text-18 font-semibold mt-20">사건 목록</div>
    <div className="ml-60">
      {myCaseList && <Table title={['사건번호', '사건명', '공개여부']} caseList={myCaseList} userRole={role} isOpenCase={isOpenCase}/>}
    </div>
    </div>
  )
}

export default MyPage;